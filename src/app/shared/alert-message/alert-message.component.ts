import { Component, OnInit } from '@angular/core';
import {SuiModal, ComponentModalConfig, ModalSize} from "ng2-semantic-ui"

interface IAlertModalContext {
  title:string;
  message:string;
}

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {

  constructor(public modal:SuiModal<IAlertModalContext, any, void>) {
    
  }

  ngOnInit() {
      console.log(ModalSize.Small);
  }

  greetMe: (msg:string)=>void;

  voidValue = (function () { return {valor:"cosa"}})();

  close(){
    this.modal.approve(this.voidValue);
      
  }
}


export class AlertMessageModal extends ComponentModalConfig<IAlertModalContext, any, void> {
  constructor(title:string, message:string, size = ModalSize.Mini) {
      super(AlertMessageComponent, { title, message});
      this.isClosable = true;
      this.transitionDuration = 200;
      this.size = size;
  }
}
