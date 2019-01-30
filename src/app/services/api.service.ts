import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import any = jasmine.any;
import {Message} from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/users';

  constructor(public http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUserById(id): Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  addNewUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
  dellUserById(user):Observable<any> {
    return this.http.delete(this.url + "/" + user.id);
  }
}
