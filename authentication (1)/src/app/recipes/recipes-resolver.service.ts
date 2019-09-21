import {Injectable} from '@angular/core';
import {Recipe} from './recipes.model';
import {Resolve,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import {DataStoreService} from '../shared/data-store.service';


@Injectable({providedIn:'root'})

export class RecipeResolverService implements Resolve<Recipe[]>
{
   constructor(private dataStore:DataStoreService){}
   resolve( route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
   {
        return this.dataStore.fetchRecipes();
   }
}
