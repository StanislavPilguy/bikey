import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {

  @Input() isView =  false;
  @Input() user: User;


  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
  }

  onDel() {
    this.apiService.delUser(this.user.id).subscribe()
  }

}
