import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  results = [];

  constructor(private http: HttpClient){}

  ngOnInit() {
  }

  onSubmit(){ 
  	this.submitted = true; 

  	let token = this.http.post('http://localhost/Blog_Sf3/blog/web/app_dev.php/auth-tokens.json', this.login).subscribe(resp => {
    	// Read the result field from the JSON response.
    	return resp;
    });

    console.log(token);
  }

  onLogMe(){
  	console.log(this.login);
  	this.clickMessage = 'Hello Huston';
  }



}
