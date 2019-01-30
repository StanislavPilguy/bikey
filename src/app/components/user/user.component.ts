import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: string;
  user: User;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    if (this.id) {
      this.onGetUserById(this.id);
    }
  }

  onGetUserById(id) {
    this.apiService.getUserById(id).subscribe(
      (user: User) => {
        this.user = user;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
