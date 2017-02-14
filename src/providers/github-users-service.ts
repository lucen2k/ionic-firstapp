import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from './user';

/*
  Generated class for the GithubUsersService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsersService {

  constructor(public http: Http) {
    console.log('Hello GithubUsersService Provider');
  }
  getUsers(): Observable<User[]>{
    return this.http.get('https://api.github.com/users')
       .map(res => <Array<User>>res.json());
  }
}
