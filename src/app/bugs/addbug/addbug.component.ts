import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import {AddBug} from '../addbug';
import { Validators } from '@angular/forms';
import { BugsService } from '../../services/bugs.service';
import { Router} from '@angular/router';

import {AlertMessageComponent, AlertMessageModal} from "../../shared/alert-message/alert-message.component";
import {SuiModal, ComponentModalConfig, ModalSize, SuiModalService} from "ng2-semantic-ui"

@Component({
  selector: 'app-addbug',
  templateUrl: './addbug.component.html',
  styleUrls: ['./addbug.component.css']
})
export class AddbugComponent implements OnInit {
  createBugForm: FormGroup;
  bug : AddBug = new AddBug();
  severityColor:string='yellow';
  errorMessage:string='';

  constructor(private fb: FormBuilder,
    private bugService: BugsService, 
    public modalService:SuiModalService,
    private router: Router) {

    
    this.createBugForm = this.fb.group({
        'title':['', Validators.compose([Validators.required,Validators.minLength(5), Validators.maxLength(100)]) ],
        'body':['', Validators.compose([Validators.required, Validators.maxLength(500)])],
        'stepToReproduce':['', Validators.compose([Validators.required, Validators.maxLength(250)])],
        'severity':1,
        'isFixed':false
    });
   }

  ngOnInit() {

    this.createBugForm.get('body').valueChanges.subscribe(validate=>{
        console.log(validate);
    });
    
  }

  save(){
    console.log(this.createBugForm);
    console.log(JSON.stringify(this.createBugForm.value));

    this.bugService.saveBug(this.createBugForm.value).subscribe(data=>{

      this.modalService
      .open(new AlertMessageModal("Success", "The bug was successfully submitted.", ModalSize.Tiny))
      .onApprove((retornado:any) => this.router.navigate(['/bugs']))
      .onDeny((error)=>{this.router.navigate(['/bugs'])});
    },
    error=>{ this.errorMessage=error;});
  }

  setSeverity(severity:number){
      this.createBugForm.value.severity= severity;
  }

  doBodyValueChange(event:any){
      console.log(event.value);
  }

  
}
