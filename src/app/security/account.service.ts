import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {
  private _loginUrl = 'http://localhost:60541/token';

  constructor(private _http: HttpClient) {
  }

  doLogin(email:string, password:string){
    
  }

}
