import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User;

  constructor(private userService:UsersService) 
  {
      this.user = new User;
  }

  ngOnInit() {
  }

}
