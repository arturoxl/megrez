import { Component, OnInit } from '@angular/core';

import { UserService } from "./services/system/user.service";
import { User } from './model/system/interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-administrator-app';

  users: User[] = [];

  constructor(private userService: UserService){ }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.assignAndPrintValues(users) );
       
  }

  displayUsers(event: Event): void{
    console.log('displaying users');
  }

  assignAndPrintValues(users): void{
    this.users = users;
    console.log( this.users );
    for(let user of this.users){
      console.log('printing id: '+user.id);
      console.log('printing whole object: '+user); 
    }
  }

  ngOnInit(){
    //this.getUsers();
  }
}
