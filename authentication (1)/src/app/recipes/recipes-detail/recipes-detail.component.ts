import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipesService} from '../../recipes.service';
import {ActivatedRoute,Params,Router} from '@angular/router';
 @Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
 recipesName:Recipe;
  id:number;
  constructor(private recipesService:RecipesService,private route:ActivatedRoute,private router:Router) { }
  addItem()
    {
      this.recipesService.onAddList(this.recipesName.ingredient);
    }
    onEdit()
    {
       this.router.navigate(['edit'],{relativeTo:this.route});
    }
    onDelete()
    {
      this.recipesService.deleteRecipe(this.id);
      this.router.navigate(["./recipes"]);
    }
  ngOnInit() {
     this.route.params.subscribe(
       (params:Params)=>{this.id=+params['id'];
      this.recipesName= this.recipesService.getRecipe(this.id);
     }
     );
  }

}
