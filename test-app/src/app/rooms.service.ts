import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Room }  from './room';

@Injectable()
export class RoomsService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  
  private hostUrl = '';

  getRooms(): Promise<Room[]> {
    return this.http.get(this.hostUrl+'/api/rooms')
               .toPromise()
               .then(res => res.json() as Room[])
               .catch(this.handleError);
  }
  
  getRoom(roomID: number): Promise<Room> {
    return this.http.get(this.hostUrl+'/api/rooms/'+roomID)
               .toPromise()
               .then(res => res.json() as Room)
               .catch(this.handleError);
  }
  
  update(room: Room): Promise<Room> {
    return this.http.put(this.hostUrl + '/api/rooms/' + room.roomID,
                         JSON.stringify(room),
			 {headers: this.headers})
               .toPromise()
               .then(() => room)
               .catch(this.handleError);
  }

  searchRooms(query: string): Promise<Room[]>{
    return this.http.get(this.hostUrl+'/api/search/'+query)
               .toPromise()
	       .then(res => res.json() as Room[])
	       .catch(this.handleError);
  }

  getUserRooms(): Promise<Room[]>{
    return this.http.get(this.hostUrl+'/api/profile')
               .toPromise()
               .then(res => res.json() as Room[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
  
