import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;

  //eventually remember me?

  constructor(private userService:UsersService) 
  {
     this.user = new User;
  }

  ngOnInit() {
  }

  login(){
    this.userService.login(this.user);
  }

}
