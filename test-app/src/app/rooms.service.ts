import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Room }  from './room';
import { ROOMS } from './mock-rooms';

@Injectable()
export class RoomsService {

  constructor(private http: Http) { }

  private roomsUrl = 'http://localhost:8080/api/rooms';

  getRooms(): Promise<Room[]> {
    return this.http.get(this.roomsUrl)
               .toPromise()
               .then(response => response.json() as Room[])
               .catch(this.handleError);
  }
  
  getRoom(roomID: number): Promise<Room> {
    return this.http.get(this.roomsUrl+'/'+roomID)
               .toPromise()
               .then(response => response.json() as Room)
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
  
