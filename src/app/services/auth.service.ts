import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(user:User):boolean{
    if(user.userId=="sandeep" 
      && user.password=="sandeep"){
      return true;
    }else{
      return false
    }
  }
}
