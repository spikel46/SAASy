import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Chat } from './chat';
import { ChatsService } from '../chats.service';
  
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})

export class ChatsComponent implements OnInit {

  @Input() id:number;
  chats: Chat[];
  chat: Chat;
  connection:any;
  message:any;
  username:string;

  constructor(private chatsService: ChatsService) 
  {
      this.chatsService.getUserInfo()
          .subscribe(
           result => {
             this.username = result.displayName;
           });
  }


  ngOnInit() {
    this.getChats();
    this.getChatStream();
  }

  getChats(): void {
    this.connection = this.chatsService.getRoomChats(this.id).then(chats => this.chats = chats);
  }

  getChatStream(): void {
    this.connection = this.chatsService.getChatStream(this.id)
        .subscribe(message => { this.chats.push(message); })
  }

  add(message: string): void {
    if (!message) { return; }
    this.chatsService.sendChat(message, this.id, this.username)
        .then(chat => this.chat = chat);
  }
  upvote(up_chat: Chat): void {
    console.log("Up: " + up_chat["_id"]);
    this.chatsService.sendUpvote(up_chat)
        .then(chat => this.chat = chat);
  }
  downvote(down_chat: Chat): void {
    console.log("Down: " + down_chat["_id"]);
    this.chatsService.sendDownvote(down_chat)
        .then(chat => this.chat = chat);
  }
  
  

}


