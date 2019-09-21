import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import  {RecipesstartComponent} from  './recipes/recipesstart/recipesstart.component';
import {RecipesDetailComponent} from './recipes/recipes-detail/recipes-detail.component';
import {RecipesEditComponent} from './recipes/recipes-edit/recipes-edit.component';
import {RecipeResolverService} from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
const appRoutes: Routes = [
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
{path:'recipes',component:RecipesComponent,children:[
  {path:'',component:RecipesstartComponent},
  {path:'new',component:RecipesEditComponent},
  {path:':id',component:RecipesDetailComponent  },
  {path:':id/edit',component:RecipesEditComponent,resolve:[RecipeResolverService]}
]},
{path:'shopping-list',component:ShoppingListComponent},
{path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
