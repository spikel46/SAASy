import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Room } from './room';
import { RoomsService } from './rooms.service';

@Component({
  selector: 'my-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{

  rooms: Room[];
  selectedRoom: Room;

  constructor(
  private router: Router,
  private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.getRooms();  
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
  }

  getRooms(): void {
    this.roomsService.getRooms().then(rooms=>this.rooms = rooms);
  }

  gotoDetail(): void {
    console.log('/rooms/'+this.selectedRoom.roomID);
    this.router.navigate(['/rooms',this.selectedRoom.roomID]);
  }

}
