import { Component, OnInit } from '@angular/core';

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
  
  constructor(private userService:UsersService) {
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
    if(this.confirm(this.user.password, this.confirmPass)){;
      this.userService.register(this.user)
          .then(result =>
	        {
		  console.log("RESULT" + JSON.stringify(result));
	        })
    }
  }

}
