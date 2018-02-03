import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import {AccountService} from '../account.service'
import { environment } from '../../../environments/environment';
import { fail } from 'assert';
import { Router } from '@angular/router';


declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  environmentName = environment.envName;
  isLoading:boolean= false;
  model:any = {email:'', password:''};
  errorMessage:string ;

  constructor(private _http: HttpClient, private _accountService:AccountService, private router:Router) { 
  }

  text :string="manuel";

  ngOnInit() {
    console.log(this._accountService.getCurrentSession().access_token);
  }

  authenticate(loginForm){
      this.isLoading = true;
        this._accountService.doLogin(this.model.email, this.model.password)
          .subscribe(data=>{ 
            this.isLoading = false;  
            this.errorMessage = null; 
            this.router.navigate([("/bugs")]);
          },
          error=>{ this.errorMessage = error; 
            this.isLoading = false;});
  }

}
