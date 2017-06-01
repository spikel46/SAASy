import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;

  constructor(private userService:UsersService) {
    this.user = new User;
  }

  ngOnInit() {
  }

  register() {
    console.log(JSON.stringify(this.user));
    this.userService.register(this.user);
  }

}
