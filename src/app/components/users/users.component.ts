import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {User} from '../../interfaces/user';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import {AdduserComponent} from '../adduser/adduser.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(public apiService: ApiService, public router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.onGetUsers();
  }


  onGetUsers() {
    this.apiService.getAllUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openModal() {
    this.dialog.open(AdduserComponent);
  }

}
