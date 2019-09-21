import {HttpClient,HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipes/recipes.model';
import {map,tap,take,exhaustMap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import {User} from '../auth/user.model';
export class DataStoreService{
  constructor(private http:HttpClient,private recipesService:RecipesService,private authService:AuthService) {}
  storeRecipes()
  {
    const recipes=this.recipesService.onGet();
    this.http.put('https://my-food-book.firebaseio.com/recipes.json',recipes).subscribe(responseData=>{console.log(responseData)});
  }
  fetchRecipes()
  {
    return this.authService.user.pipe(take(1),exhaustMap(user=>{
        return this.http.get<Recipe[]>('https://my-food-book.firebaseio.com/recipes.json',{
          params:new HttpParams().set('auth',user.token)
        });
    }),map(recipes=>{
       return recipes.map(recipes=>
       {
         return {...recipes,ingredient:recipes.ingredient?recipes.ingredient:[]};
       });
     }),
      tap(recipes=>{
          this.recipesService.setRecipe(recipes);
      })
   );




  }
}
