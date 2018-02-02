import { Component, OnInit } from '@angular/core';


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  model:any = {email:'', password:''};

  constructor() { }

  ngOnInit() {
    
    $("#menu" ).remove();
  }

  save(loginForm){
    alert("login! "+ this.model.email + this.model.password);
  }

}
