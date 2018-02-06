import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AccountService} from "./security/account.service";
import {Router } from '@angular/router';


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
 
  constructor(private accountService: AccountService, private _router: Router){

  }

  ngOnInit() {


    if(this.accountService.getCurrentSession()!=null){
      this.userName = this.accountService.getCurrentSession().userName;
    }
    $('.ui.sidebar').sidebar({context: $('.segment')}).sidebar('attach events', '.menu .mnu');

    
  }


  exit(){
      this.accountService.logout();
      this._router.navigate(['/auth'])
  }
}
