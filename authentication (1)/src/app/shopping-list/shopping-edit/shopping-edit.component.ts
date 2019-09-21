import { Component, OnInit,ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import  {ShoppingListService} from '../../shopping-list.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('f',{static:false}) myform:NgForm;
  editedMode=false;
  editedIndex:number;
  updateItem:Ingredient;
  constructor(private shopService:ShoppingListService) {

  }
  onClear()
  {
    this.myform.reset();
    this.editedMode=false;
  }
  onDelete()
  {
    this.shopService.deleteIngredients(this.editedIndex);
        this.myform.reset();
          this.editedMode=false;
  }
   onAdd(form:NgForm)
   {

     const value=form.value;
     const newIngredient=new Ingredient(value.Name,value.amount);
     if(this.editedMode)
     {
       this.shopService.updateIngredients(this.editedIndex,newIngredient);
     }
     else{
     this.shopService.onAddItem(newIngredient);}
     this.editedMode=false;
     form.reset();
     }
  ngOnInit() {
     this.shopService.startedEditing.subscribe(
       (index)=>{
         this.editedMode=true;
         console.log(this.editedMode);
        this.editedIndex=index;
        this.updateItem=this.shopService.getIngredients(this.editedIndex);
        this.myform.setValue(
          {
            Name:this.updateItem.name,
            amount:this.updateItem.amount
          }
        );
       }
     );
  }

}
