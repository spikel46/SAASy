import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Room } from '../room';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-room-search',
  templateUrl: './room-search.component.html',
  styleUrls: ['./room-search.component.css']
})
export class RoomSearchComponent implements OnInit {
  selectedRoom: Room;
  rooms: Room[];

  constructor(private route:ActivatedRoute,
  private router:Router,
  private roomsService: RoomsService) {}

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.roomsService.searchRooms(this.route.params["_value"]["term"]))
        .subscribe((rooms) => this.rooms = rooms);
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
  }

  gotoDetail(): void {
    this.router.navigate(['/rooms',this.selectedRoom.roomID]);
  }

}
