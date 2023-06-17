import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  getRandomImageUrl(): Observable<any> {
    return this.http.get(`https://dog.ceo/api/breeds/image/random`);
  }

  constructor(private http: HttpClient) {}
}
