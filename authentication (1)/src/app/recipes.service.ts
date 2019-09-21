import {Recipe} from './recipes/recipes.model';
import {EventEmitter,Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Ingredient} from './shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipesService{
  // recipes:Recipe[]=[new Recipe("A test","Simple Recipe","https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg",[new Ingredient('Meat',5),new Ingredient('Buns',5)]),
  //                   new Recipe("Another one","Good Recipe","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spaghetti-squash-recipes-1563482522.jpg",[new Ingredient('apple',5),new Ingredient('apple',5)])];
   recipes:Recipe[];
   recipesSelected=new EventEmitter<Recipe>();
   recipesChanged=new Subject<Recipe[]>();
   constructor(private shopService:ShoppingListService){}
   onGet()
   {
     return this.recipes.slice();
   }
   setRecipe(recipes:Recipe[])
   {
     this.recipes=recipes;
     this.recipesChanged.next(this.recipes.slice());
   }
   onAddList(ingredients:Ingredient[])
   {
     this.shopService.addIngredients(ingredients);
   }
   getRecipe(index:number)
   {
     return this.recipes[index];
   }
   updateRecipe(index:number,newRecipe:Recipe)
   {
    this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice());
   }
   addNewRecipe(newRecipe:Recipe)
   {
     this.recipes.push(newRecipe);
     this.recipesChanged.next(this.recipes.slice());
   }
   deleteRecipe(index:number)
   {
     this.recipes.splice(index,1);
      this.recipesChanged.next(this.recipes.slice());

   }
}
