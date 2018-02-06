import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BugsService} from '../services/bugs.service';

@Component({
  selector: 'app-bug-details',
  templateUrl: './bug-details.component.html',
  styleUrls: ['./bug-details.component.css']
})
export class BugDetailsComponent implements OnInit {

  bug: any;//Can we use a type?
  errorMessage:string ='';

  constructor(private _route: ActivatedRoute,  
  	private _router: Router,  private bugService: BugsService) { }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getBug(id);
    }
  }

  getBug(id:number){
    this.bugService.getBug(id)
    .subscribe(data=>{this.bug = data; }, 
      error=>this.errorMessage = error);
  }


}
