import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  //eventually remember me?

  constructor(private userService:UsersService) {}

  ngOnInit() {
  }

  login(){
    this.username = "";
    this.password = "";
    this.userService.login(this.username,this.password);
  }

}
