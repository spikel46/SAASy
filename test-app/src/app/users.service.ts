import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { User }  from './user';

@Injectable()
export class UsersService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  
  private usersUrl = 'http://localhost:8080';

  register(user:User): Promise<any>{
    console.log(JSON.stringify(user));
    return this.http.post(this.usersUrl+'/api/register',
      JSON.stringify({username: user.username,
                      email: user.email,
      		      password: user.password,
		      memberships: [],
		      owner: []
		      }), {headers: this.headers})
        .toPromise()
        .then(res => console.log(res.json()))
        .catch(this.handleError);
  }
  
  login(user:User): Promise<any>{
    console.log(user.username + " " + user.password);
    return this.http.post(this.usersUrl+'/api/login',
      JSON.stringify(user), {headers: this.headers})
          .toPromise()
          .then(res => res.json())
          .catch(this.handleError);
    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

/*
  getRooms(): Promise<Room[]> {
    return this.http.get(this.roomsUrl+'/api/rooms')
               .toPromise()
               .then(response => response.json() as Room[])
               .catch(this.handleError);
  }
  
  getRoom(roomID: number): Promise<Room> {
    return this.http.get(this.roomsUrl+'/api/rooms/'+roomID)
               .toPromise()
               .then(response => response.json() as Room)
               .catch(this.handleError);
  }
  
  update(room: Room): Promise<Room> {
    return this.http.put(this.roomsUrl + '/api/rooms/' + room.roomID,
                         JSON.stringify(room),
			 {headers: this.headers})
               .toPromise()
               .then(() => room)
               .catch(this.handleError);
  }

  searchRooms(query: string): Promise<Room[]>{
    return this.http.get(this.roomsUrl+'/api/search/'+query)
               .toPromise()
	       .then(response => response.json() as Room[])
	       .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

sendChat(content_str: string, roomID: number): Promise<Chat> {
      console.log(content_str, roomID);
      this.socket.emit('add-Chat', content_str);
      return this.http.post(this.chatsUrl+'/api/newchat',
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
    return this.http.get(this.chatsUrl+'/api/chats/'+roomID)
               .toPromise()
               .then(response => response.json() as Chat[])
               .catch(this.handleError);
  }

  getChatStream(roomID: number): Observable<Chat>{
    let observable = new Observable(observer => { 
      this.socket = io(this.chatsUrl);
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

  sendUpvote(up_chat: Chat): Promise<Chat> {
    return this.http.put(this.chatsUrl+'/api/chats/'+ up_chat["_id"] + '/upvote',
                         JSON.stringify(up_chat),
			 {headers: this.headers})
               .toPromise()
	       .then(response => response.json() as Chat)
	       .catch(this.handleError);
  }

  sendDownvote(down_chat: Chat): Promise<Chat> {
    return this.http.put(this.chatsUrl+'/api/chats/' + down_chat["_id"] + '/downvote',
                         JSON.stringify(down_chat),
			 {headers: this.headers})
               .toPromise()
	       .then(response => response.json() as Chat)
	       .catch(this.handleError);
  }

  
*/
