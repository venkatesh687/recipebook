import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import {DropDownDirective}  from './shared/dropdown.directive';
import {RecipesService}  from './recipes.service';
import {ShoppingListService} from './shopping-list.service';
import { RecipesstartComponent } from './recipes/recipesstart/recipesstart.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import {DataStoreService} from './shared/data-store.service';
import { AuthComponent } from './auth/auth.component';
import  {LoadingComponent} from './shared/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesDetailComponent,
    RecipesListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesItemComponent,
    DropDownDirective,
    RecipesstartComponent,
    RecipesEditComponent,
    AuthComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule,
    AppRoutingModule
  ],
  providers: [RecipesService,ShoppingListService,DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
