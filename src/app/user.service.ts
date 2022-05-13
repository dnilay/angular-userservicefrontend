import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://userserviceapp-env.eba-6qmg9cyp.ap-southeast-1.elasticbeanstalk.com/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
    //
    //

  }
}
