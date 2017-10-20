import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article = {
    "title": "",
    "metadescription":"",
    "description": "",
    "datepublication" :  {
        "date": {
          "year": 2017,
          "month":10,
          "day": 15
        },
        "time": {
          "hour": 12,
          "minute": 0
        }
      },
    "datecreation" : {
        "date": {
          "year": 2017,
          "month":10,
          "day": 15
        },
        "time": {
          "hour": 12,
          "minute": 0
        }
      },
    "category": 0,
    "thumb" : 0
  };

  constructor(private http: HttpClient){}

  ngOnInit() {
    let datecreation = new Date();

    this.article.datepublication =
    {
      "date": {
        "year": datecreation.getFullYear(),
        "month": datecreation.getMonth(),
        "day": datecreation.getDay()
      },
      "time": {
        "hour": datecreation.getHours(),
        "minute": datecreation.getMinutes()
      }
    };

    this.article.datecreation =
      {
        "date": {
          "year": datecreation.getFullYear(),
          "month": datecreation.getMonth(),
          "day": datecreation.getDay()
        },
        "time": {
          "hour": datecreation.getHours(),
          "minute": datecreation.getMinutes()
        }
      };
    console.log(this.article);

  }

  onSubmit(){
    console.log(this.article);
    //let datepublication = new Date(this.article.datepublication);
    //this.article.datepublication = datepublication.toJSON();
    let header = new HttpHeaders({
    'Content-Type': 'application/json'
    });

    console.log(header);
    this.http.post('http://localhost/Blog_Sf3/blog/web/app_dev.php/api/article/new', this.article,{ headers: header })
             .subscribe(
               data => {
                 //this.article = data;
                 console.log(data);
               },
               err => {
                console.log(err);
              }
            );
  }

}
