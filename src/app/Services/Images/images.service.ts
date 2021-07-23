import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImages(page){
    return this.http.get('https://picsum.photos/v2/list?page='+page+'&limit=10');

  }
}
