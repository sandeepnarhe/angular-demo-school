import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import {AuthService} from "../../services/auth.service"
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User
  isAuthenciated: boolean =false;
  errorMessage:string ="";
  constructor(private authService:AuthService, private router:Router ) {
    
    this.user={
      userId:"",
      password:""
    }
   }

  ngOnInit() {
  }

  authenticate(){
    this.isAuthenciated = this.authService.authenticate(this.user);

    if(this.isAuthenciated){
      this.router.navigate(['/view'])
    }else{
      this.errorMessage = "User id or password is not correct";
    }
  }

}
