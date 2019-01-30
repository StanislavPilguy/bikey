import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {User} from '../../interfaces/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

    date = new Date();

  eyeColor = [
    'green', 'grey', 'blue', 'brown'
  ];

  genders = [
    'Male', 'Female', 'Transsexual'
  ];




  user: User = {
    isActive: false,
    balance: '',
    picture: 'http://placehold.it/32x32',
    age: 0,
    eyeColor: '',
    name: '',
    gender: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    about: '',
    latitude: 38,
    longitude: 47,
    tags: [
      'react',
      'angular'
    ]
  };



  constructor(public apiService: ApiService, public router: Router) {

  }

  ngOnInit() {
  }


  onAddNewUser() {
    this.apiService.addNewUser(this.user).subscribe(
      (user: User) => {
        if (user) {
          this.router.navigateByUrl('users');
        }
      }
    );
  }

  onSelectColorForEye(e) {
    this.user.eyeColor = (e.value);
  }

  onSelectGender(e) {
    this.user.gender = (e.value);
  }

}
