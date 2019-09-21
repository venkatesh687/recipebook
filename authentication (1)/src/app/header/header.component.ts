import { Component, OnInit,OnDestroy } from '@angular/core';
import  {DataStoreService} from  '../shared/data-store.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
 private sub:Subscription;
 isAuthenticated:any;

  constructor(private dataStore:DataStoreService,private authService:AuthService) {
    this.isAuthenticated=false;
  }
  onSave()
{
  this.dataStore.storeRecipes();
}
onFetch()
{
  this.dataStore.fetchRecipes().subscribe();
}
  ngOnInit() {
      console.log(this.isAuthenticated);
      this.sub=this.authService.user.subscribe(user=>{
        console.log(user);
      this.isAuthenticated=!!user;
      console.log(this.isAuthenticated);
   });
  }
  ngDoCheck() {
      console.log(this.isAuthenticated);
      this.sub=this.authService.user.subscribe(user=>{
      this.isAuthenticated=!!user;
      console.log(this.isAuthenticated);
   });
  }
  ngOnDestroy()
  {
    //this.sub.unsubscribe();
  }
}
