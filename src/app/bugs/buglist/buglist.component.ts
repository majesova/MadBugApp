import { Component, OnInit } from '@angular/core';
import {BugsService} from '../../services/bugs.service';

@Component({
  selector: 'app-buglist',
  templateUrl: './buglist.component.html',
  styleUrls: ['./buglist.component.css']
})
export class BuglistComponent implements OnInit {

  bugs : any[];
  errorMessage:string='';

  constructor(private _bugService : BugsService) { }

  ngOnInit() {

    this._bugService.getBugs().subscribe(
      data=>{ 
        
        this.bugs = data;
      },
      error=>{this.errorMessage= error});    

  }

}
