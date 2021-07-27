import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,) { }

  getUsers(page){
    return this.http.get('https://randomuser.me/api/?page='+page+'&results=12');

  }


}
