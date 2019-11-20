import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from "../../../services/system/user.service";
import { User } from "../../../model/system/interfaces/User";
import { MatTableDataSource, MatPaginator } from '@angular/material';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  usersSource;
  numUsers: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'];

  constructor(private userService: UserService) { }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.assignAndPrintValues(users) );
  }

  applyFilter(filterValue: string) {
    console.log('Displaying new results');
    this.usersSource.filter = filterValue.trim().toLowerCase();
  }

  assignAndPrintValues(users): void{
    this.users = users;
    this.numUsers = this.users.length;
    this.usersSource = new MatTableDataSource<User>(this.users);
    this.usersSource.paginator = this.paginator;
    for(let user of users){
      console.log('Id User:'+ user.id);
      console.log('Name User:'+ user.name);
      console.log('Username User:'+ user.username);
      console.log('Email User:'+ user.email);
      console.log('Address User:'+ user.address);
      console.log('Phone User:'+ user.phone);
      console.log('Website User:'+ user.website);
      console.log('Company User:'+ user.company);
    }
  }

  ngOnInit() {
    this.getUsers();  
  }

}
