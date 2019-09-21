import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {FormGroup,FormControl,FormArray,Validators} from  '@angular/forms';
import {RecipesService} from '../../recipes.service';
@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
   id:number;
   editMode=false;
   recipeForm:FormGroup;

  constructor(private route:ActivatedRoute,private recipesService:RecipesService,private router:Router) { }

  ngOnInit() {
     this.route.params.subscribe(
       (params:Params)=>{
         this.id=+params['id'];
         this.editMode=params['id']!=null;
         console.log(this.editMode);
            this.initForm();
       }
     );
     this.initForm();
  }
  onCancel()
  {
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  addButton()
  {
    (<FormArray>this.recipeForm.get('ingredient')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,Validators.pattern(/[1-9]+[0-9]*$/)])
      })
    );
  }
  onSubmit()
  {

    if(this.editMode)
    {
      this.recipesService.updateRecipe(this.id,this.recipeForm.value);
    }
    else{
       this.recipesService.addNewRecipe(this.recipeForm.value);
    }
  }
  onDeleteIngredients(index:number)
  {
    (<FormArray>this.recipeForm.get('ingredient')).removeAt(index);
  }
  private initForm()
  {
      let recipesName="";
      let imagePath="";
      let description="";
      let recipeIngredients=new FormArray([]);
       if(this.editMode)
       {
         const recipe=this.recipesService.getRecipe(this.id);
         recipesName=recipe.name;
         imagePath=recipe.imagePath;
         description=recipe.description;
         if(recipe['ingredient'])
         {
           for(let ing of recipe.ingredient)
           {
             recipeIngredients.push(new FormGroup({
                 name:new FormControl(ing.name),
                amount:new FormControl(ing.amount)
             })
           );
           }
         }
       }
       this.recipeForm=new FormGroup(
         {
           'name':new FormControl(recipesName,Validators.required),
           'imagePath':new FormControl(imagePath,Validators.required),
            'description':new FormControl(description,Validators.required),
            'ingredient':recipeIngredients
         }
       );
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredient')).controls;
  }
}
