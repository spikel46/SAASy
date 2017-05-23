import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ChatsComponent } from './chats/chats.component'
import { Room } from './room';
import { Chat } from './chats/chat';
import { RoomsService } from './rooms.service';
import { ChatsService } from './chats/chats.service';

@Component({
  selector: 'room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: [ './room-detail.component.css' ]
})

export class RoomDetailComponent implements OnInit {
  room: Room;
  chats: Chat[];

  constructor(
    private roomsService: RoomsService,
    private chatsService: ChatsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.roomsService.getRoom(+params['roomID']))
	.subscribe(room => this.room = room);
  }
  /*
  saveRoom(): void{
    this.roomsService.update(this.room)
      .then(() => window.location.reload(true));
  }
  */
  goBack(): void {
    this.location.back();
  }
}
