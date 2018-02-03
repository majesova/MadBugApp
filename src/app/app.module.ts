import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './security/login/login.component';
import {SuiModule} from 'ng2-semantic-ui';
import { AlertMessageComponent, AlertMessageModal } from './shared/alert-message/alert-message.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AccountService } from './security/account.service';
import { BuglistComponent } from './bugs/buglist/buglist.component';
import { BugsService } from './services/bugs.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    LoginComponent,
    AlertMessageComponent,
    BuglistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SuiModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent},
      {path:'auth', component: LoginComponent},
    	{path:'', redirectTo:'welcome', pathMatch:'full'},
      {path: '***', redirectTo:'welcome',pathMatch:'full'},
      {path:'bugs', component: BuglistComponent},
    	], {useHash:false}),
  ],
  entryComponents:[
    AlertMessageComponent //se configura para enviar alertas
  ],
  
  providers: [AccountService, BugsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
