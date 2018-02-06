import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {

  @Input() severity:number;
  width:number;
  

  constructor() { }

  ngOnInit() {
    this.width = this.severity * 19;
  }

  ngOnChanges():void{
    
  }

}
