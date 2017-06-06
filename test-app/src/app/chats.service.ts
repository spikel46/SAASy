import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as io from 'socket.io-client';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Chat }  from './chats/chat';

@Injectable()
export class ChatsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private hostUrl = '';

  private curr_time = new Date();
  private socket:any;

  constructor(private http: Http) { }

  getUserInfo() {
    return this.http.get( this.hostUrl + '/auth/userdata')
    .map(response => response.json());
  }

  sendChat(content_str: string, roomID: number, u_name:string): Promise<Chat> {
      console.log(content_str, roomID, u_name);
      var my_chat = {
                        sender: u_name,
		        toRoom: roomID,
			content: content_str,
			timestamp: this.curr_time,
			score: 0
                      }
      this.socket.emit('add-Chat', my_chat);
      return this.http.post(this.hostUrl+'/api/newchat',
      	JSON.stringify(my_chat), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Chat)
        .catch(this.handleError);
  }

  getRoomChats(roomID: number): Promise<Chat[]> {
    return this.http.get(this.hostUrl+'/api/chats/'+roomID)
               .toPromise()
               .then(res => res.json() as Chat[])
               .catch(this.handleError);
  }

  getChatStream(roomID: number): Observable<Chat>{
    let observable = new Observable(observer => { 
      this.socket = io(this.hostUrl);
      this.socket.on('Chat', (data) => { 
        console.log(data);
        observer.next(data);
      });
      return () => { this.socket.disconnect(); }; 
    })
    return observable;
  } 

  sendUpvote(up_chat: Chat): Promise<Chat> {
    return this.http.put(this.hostUrl+'/api/chats/'+ up_chat["_id"] + '/upvote',
                         JSON.stringify(up_chat),
			 {headers: this.headers})
               .toPromise()
	       .then(res => res.json() as Chat)
	       .catch(this.handleError);
  }

  sendDownvote(down_chat: Chat): Promise<Chat> {
    return this.http.put(this.hostUrl+'/api/chats/'+ down_chat["_id"] +'/downvote',
                         JSON.stringify(down_chat),
			 {headers: this.headers})
               .toPromise()
	       .then(res => res.json() as Chat)
	       .catch(this.handleError);
  }

  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
