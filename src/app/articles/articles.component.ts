import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get('http://localhost/Blog_Sf3/blog/web/app_dev.php/api/articles.json', {})
             .subscribe(
               data => {
                 this.articles = data;
                 console.log(data);
               },
               err => {
                console.log(err);
              }
            );
  }

}
