import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(public http: HttpClient) {}
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
