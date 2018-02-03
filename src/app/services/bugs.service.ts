import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import {HttpClient, HttpErrorResponse, HttpHeaders,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as CryptoJS from 'crypto-js';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment.prod';
import {AccountService} from '../security/account.service'
import { open } from 'fs';
import { Headers } from '@angular/http/src/headers';

@Injectable()
export class BugsService {
  private _urlBugs = environment.apiUrl + 'api/bug/';

  constructor(private _http: HttpClient, private _accountService:AccountService) { }
  headers:Headers;
  public getBugs():Observable<any>{
    var token = this._accountService.getToken();
    

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'text/plain',
        'Authorization': 'bearer '+ token,
        "Access-Control-Allow-Credentials": "true"
      })
    };
    
    return this._http.get<any>(this._urlBugs, httpOptions)
    .do(data=>{
      
    })
    .catch(this.handleError);
    
}

handleError(err:HttpErrorResponse){
  console.log("handle error" + err.error.error_description);
  return Observable.throw(err.error.error_description);
}
}
