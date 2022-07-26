import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  path: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {
    
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.path + 'users');
  }
}
