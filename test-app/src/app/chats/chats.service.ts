import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import * as io from 'socket.io-client';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Chat }  from './chat';
import { CHATS } from './mock-chats';

@Injectable()
export class ChatsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private chatsUrl = 'http://localhost:8080/api/chats';
  private postChatUrl = 'http://localhost:8080/api/newchat';

  private temp_user = "Not-Joey";
  private curr_time = new Date();
  private rating = 30; 
  private socket:any;

  constructor(private http: Http) { }

  sendChat(content_str: string, roomID: number): Promise<Chat> {
      console.log(content_str, roomID);
      this.socket.emit('add-Chat', content_str);
      return this.http.post(this.postChatUrl,
	JSON.stringify({sender: this.temp_user,
		        toRoom: roomID,
			content: content_str,
			timestamp: this.curr_time,
			score: this.rating
                      }), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Chat)
        .catch(this.handleError);
  }

  getRoomChats(roomID: number): Promise<Chat[]> {
    return this.http.get(this.chatsUrl+'/'+roomID)
               .toPromise()
               .then(response => response.json() as Chat[])
               .catch(this.handleError);
  }

  getChatStream(roomID: number): Observable<Chat>{
    let observable = new Observable(observer => { 
      this.socket = io('http://localhost:8080');
      this.socket.on('Chat', (data) => { 
        console.log(data);
        observer.next({sender: this.temp_user,
		        toRoom: roomID,
			content: data,
			timestamp: this.curr_time,
			score: this.rating
                      });
      });
      return () => { this.socket.disconnect(); }; 
    })
    return observable;
  } 

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
