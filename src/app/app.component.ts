import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AccountService} from "./security/account.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userName:string='';
 
  constructor(private accountService: AccountService){

  }

  ngOnInit() {


    this.userName = this.accountService.getCurrentSession().userName;


    /*$("#mainMenu").on("click",function(event){
      event.preventDefault();

      $('.ui.labeled.icon.sidebar')
      .sidebar({
        context: $('#ctx')
      })
      .sidebar('toggle')
    ;
    })*/

    $('.ui.sidebar').sidebar({context: $('.segment')}).sidebar('attach events', '.menu .mnu');
 
  }
}
