import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes/recipes.model';
import {RecipesService} from "../recipes.service";
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
selectedRecipes:Recipe;
  constructor(private recipesService:RecipesService) { }

  ngOnInit() {
     this.recipesService.recipesSelected.subscribe((recipe:Recipe)=>{
       this.selectedRecipes=recipe;
     });
  }

}
