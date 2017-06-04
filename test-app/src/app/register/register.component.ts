import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  user:User;
  confirmPass:string;
  message:string;
  
  constructor(private userService:UsersService,
  private router:Router) {
    this.user = new User;
  }

  confirm(pwd1, pwd2){
    if(pwd1 != pwd2){
      this.message = "Passwords do not match";
      return false;
    }
    if(pwd1 == pwd2){
      this.message = "Passwords match! Please log in!"
      return true;
    }
  }

  register() {
    var new_page;
    if(this.confirm(this.user.password, this.confirmPass)){
      this.userService.register(this.user)
          .then(result =>
	        {
		  console.log("RESULT" + result["_body"]);
		  new_page = result["_body"];
		  this.router.navigate([new_page]);
	        })
    }
  }

}
