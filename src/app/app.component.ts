import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

 
  ngOnInit() {
    $("#mainMenu").on("click",function(){
      $('.ui.labeled.icon.sidebar')
      .sidebar('toggle')
    ;
    })
    
  }
}
