import {Injectable} from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {catchError,tap} from 'rxjs/operators';
import {throwError,BehaviorSubject} from 'rxjs';
import {User}  from './user.model';
export interface AuthResponseData{
   kind:string;
   idToken:string;
   email:string;
   refreshToken:string;
   expiresIn:string;
   localId:string;
   registerd?:boolean;
 }
@Injectable({providedIn:'root'})
export class AuthService
{
   constructor(private http:HttpClient){}
   user=new BehaviorSubject<User>(null);
   signUp(email:string,password:string)
   {
      return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4nift9Dz2h7HbiaJIIs0R8qSHmGEqer0',
     {
       email:email,
       password:password,
       returnSecureToken:true
     }
   ).pipe(catchError(this.handleError),tap(resData=>{
      this.handleAuth(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
    }));
   }
   login(email:string,password:string)
   {
      return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4nift9Dz2h7HbiaJIIs0R8qSHmGEqer0',
     {
       email:email,
       password:password,
       returnSecureToken:true
     }
   ).pipe(catchError(this.handleError),tap(resData=>{
      this.handleAuth(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
    }));
   }
   private handleAuth(email:string,userId:string,token:string,expiresIn:number)
   {
     const expirationDate=new Date(new Date().getTime() + expiresIn * 1000);
     const user1=new User(email,userId,token,expirationDate);
     this.user.next(user1);
   }

   private  handleError(errorRes:HttpErrorResponse)
   {
     let errorMessage="An unknown error occured";
     if(!errorRes.error|| !errorRes.error.error)
     {
       return throwError(errorMessage);
     }
     switch(errorRes.error.error.message)
     {
       case 'EMAIL_EXISTS':
         errorMessage="Email Already exists";
        break;
       case 'EMAIL_NOT_FOUND':
            errorMessage="Email not found";
            break;
       case 'INVALID_PASSWORD':
            errorMessage="Invalid Password";
            break;
     }
      return throwError(errorMessage);
   }

}
