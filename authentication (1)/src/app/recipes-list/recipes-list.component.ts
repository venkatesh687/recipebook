import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recipes/recipes.model';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[]=[];
  constructor(private recipesService:RecipesService,private router:Router,private route:ActivatedRoute) { }
    ngOnInit() {
      this.recipesService.recipesChanged.subscribe((recipes:Recipe[])=>{this.recipes=recipes});
     this.recipes=this.recipesService.onGet();
  }
  newRecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.route});
    console.log("new");
  }

}
