import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: any[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts); 
    });
  }
}
