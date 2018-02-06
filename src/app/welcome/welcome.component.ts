import { Component, OnInit } from '@angular/core';
import { NgModule, ViewChild } from '@angular/core';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';
import {AlertMessageComponent, AlertMessageModal} from "../shared/alert-message/alert-message.component";
import {SuiModal, ComponentModalConfig, ModalSize} from "ng2-semantic-ui"

export interface IContext {
    data:string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  firstName:string = 'Manuel';
  lastName:string = 'Soberanis';
  modalSize:any='mini';

  constructor(public modalService:SuiModalService) { 
    console.log(ModalSize.Small);
  }

  ngOnInit() {

  }
  
   open() {
    
    this.modalService.open(new AlertMessageModal("Are you sure?", "Message apa", ModalSize.Mini))
    .onApprove((retornado:any) => alert("User has accepted." + retornado.valor))
    .onDeny(() => alert("User has denied."));

  }

}
