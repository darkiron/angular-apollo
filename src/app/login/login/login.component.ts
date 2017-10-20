import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clickMessage = '';

  submitted = false;

  login = {
  	login : '',
  	password :''
  }

  token ;

  results = [];

  constructor(private http: HttpClient,private router: Router){}

  ngOnInit() {
  }

  onSubmit(){
  	this.submitted = true;

    let parameters = new HttpParams();

    parameters.set('login',this.login.login)
              .set('password', this.login.password);

  	this.http.post('http://localhost/Blog_Sf3/blog/web/app_dev.php/auth-tokens.json', this.login)
             .subscribe(
               data => {
                 this.token = data;
                 this.router.navigate(['/articles']);
               },
               err => {
                console.log(err);
                this.clickMessage = 'Bad login or password !';
              }
            );
  }

  onLogMe(){
  	console.log(this.login);
  	this.clickMessage = 'Hello Huston';
  }



}
