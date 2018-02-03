import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as CryptoJS from 'crypto-js';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class AccountService {
  private _loginUrl = environment.apiUrl + 'token';
  private key = CryptoJS.enc.Utf8.parse('7061737323313233');
  private iv = CryptoJS.enc.Utf8.parse('7061737323313233');

  constructor(private _http: HttpClient) {
    
  }

  doLogin(email:string, password:string): Observable<any>{
    let body = new URLSearchParams();
      body.set('username',email);
      body.set('password', password);
      body.set('grant_type', "password");
      body.set('client_id', "web");
      
      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      };

      return this._http.post(this._loginUrl, body.toString(), options)
      .do(data=>{
        var tokenString = JSON.stringify(data);
        this.saveToken(tokenString);
      })
      .catch(this.handleError);

  }

  handleError(err:HttpErrorResponse){
    console.log("handle error" + err.error.error_description);
    return Observable.throw(err.error.error_description);
  }

  public saveToken(tokenString:string):void{
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(tokenString), this.key,{keySize: 128 / 8,iv: this.iv,mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
    localStorage.setItem("token",encrypted.toString());
  }

  public getCurrentSession():any {
    var token = localStorage.getItem("token");
    if(token !== undefined)
    {
      var encrypted = token;
      var decrypted = CryptoJS.AES.decrypt(encrypted, this.key, {keySize: 128 / 8,iv: this.iv,mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
      var json = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
      return json;
    }
    return null;
  }

  public getToken():string{
    var session = this.getCurrentSession();
    if(session!=null){
      return session.access_token;
    }
    return null;
  }

  getIsValidSession(){

  }

}
