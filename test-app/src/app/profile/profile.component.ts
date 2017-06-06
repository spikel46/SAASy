import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import { User } from '../user';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User;
  username:string;
  password:string;
  usersService$: UsersService;
  route$: Router;

    constructor(
      _usersService:UsersService,
      _route: Router,
    ) { 
      this.user = new User;
      this.usersService$ = _usersService;
      this.route$ = _route;
      this.usersService$.getUserInfo()
      .subscribe(
        result => {
          this.username = result.displayName;
          this.password = result.emails[0].value;
        });
    }

  ngOnInit() {
  }

}
