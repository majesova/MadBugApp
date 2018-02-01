import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './security/login/login.component';
import {SuiModule} from 'ng2-semantic-ui';
import { AlertMessageComponent, AlertMessageModal } from './shared/alert-message/alert-message.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    LoginComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SuiModule
  ],
  entryComponents:[
    AlertMessageComponent //se configura para enviar alertas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
