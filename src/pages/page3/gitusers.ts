import { Component } from '@angular/core';
 
import { NavController } from 'ionic-angular';
import { GithubUsersService } from '../../providers/github-users-service';
import { User } from '../../providers/user';
 
@Component({
  selector: 'page-page3',
  templateUrl: 'gitusers.html'
})
export class Page3 {
  users: User[];
 
  constructor(public navCtrl: NavController, private githubUsersSevice: GithubUsersService) {
    githubUsersSevice.getUsers()
      .subscribe(users => {
        this.users = users;
      }, 
      err => console.log(err),
      () => {});
  }
 
}