import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

import { User } from '../user';
import { UsersService } from '../users.service';

import { Room } from '../room';
import { RoomsService } from '../rooms.service';

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
  rooms: Room[];
  selectedRoom: Room;

    constructor(
      _usersService:UsersService,
      private router:Router,
      private roomsService: RoomsService
    ) { 
      this.user = new User;
      this.usersService$ = _usersService;
      this.usersService$.getUserInfo()
      .subscribe(
        result => {
          this.username = result.displayName;
          this.password = result.emails[0].value;
        });
    }

  ngOnInit(): void {
    this.getRooms();  
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
  }

  getRooms(): void {
    this.roomsService.getUserRooms().then(rooms=>this.rooms = rooms);
  }

  gotoDetail(): void {
    this.router.navigate(['/rooms',this.selectedRoom.roomID]);
  }
}
