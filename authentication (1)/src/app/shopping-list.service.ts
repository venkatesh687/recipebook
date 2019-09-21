import {Ingredient} from './shared/ingredient.model';
import {Subject} from 'rxjs';
export class ShoppingListService{
  private ingredient:Ingredient[]=[new Ingredient('apple',5)];
   ingredientAdded=new Subject<Ingredient[]>();
   startedEditing=new  Subject<number>();
   onAddIngredients()
   {
     return this.ingredient;
   }
   getIngredients(index:number)
   {
     return this.ingredient[index];
   }
   onAddItem(ingredients:Ingredient)
   {
     this.ingredient.push(ingredients);
     this.ingredientAdded.next(this.ingredient.slice());

   }
   addIngredients(ingredients:Ingredient[])
   {
      this.ingredient.push(...ingredients);
      this.ingredientAdded.next(this.ingredient.slice());
   }
   updateIngredients(index:number,newIngredient:Ingredient)
   {
     this.ingredient[index]=newIngredient;
   }
   deleteIngredients(index:number)
   {
     this.ingredient.splice(index,1);
    this.ingredientAdded.next(this.ingredient.slice());
   }
}
