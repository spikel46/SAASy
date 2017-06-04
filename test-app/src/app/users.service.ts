import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { User }  from './user';

@Injectable()
export class UsersService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  
  private usersUrl = '';

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
        .then(res => res)
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