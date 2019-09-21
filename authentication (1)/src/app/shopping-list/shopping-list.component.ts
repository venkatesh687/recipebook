import { Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
   ingredient:Ingredient[];

  constructor(private shopService:ShoppingListService) { }
  onEditItem(index:number)
  {
     this.shopService.startedEditing.next(index);
  }
  ngOnInit() {
         this.ingredient=this.shopService.onAddIngredients();
      this.shopService.ingredientAdded.subscribe((ingredients:Ingredient[])=>{
           this.ingredient=ingredients;
         });
  }



}
