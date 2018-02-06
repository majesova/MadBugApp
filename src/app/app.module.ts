import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
import { FromnowPipe } from './fromnow.pipe';
import { BugDetailsComponent } from './bug-details/bug-details.component';
import { SeverityComponent } from './bugs/severity/severity.component';
import { AddbugComponent } from './bugs/addbug/addbug.component';
import { BugguardGuard } from './shared/bugguard.guard';
import { TokenGuard } from './security/token.guard';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    LoginComponent,
    AlertMessageComponent,
    BuglistComponent,
    FromnowPipe,
    BugDetailsComponent,
    SeverityComponent,
    AddbugComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SuiModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent,canActivate:[TokenGuard]},
      {path:'auth', component: LoginComponent},
    	{path:'', redirectTo:'welcome', pathMatch:'full',canActivate:[TokenGuard]},
      {path: '***', redirectTo:'welcome',pathMatch:'full',canActivate:[TokenGuard]},
      {path:'bugs', component: BuglistComponent, canActivate:[TokenGuard]},
      {path:'bugs/:id', component:BugDetailsComponent,canActivate:[BugguardGuard, TokenGuard]},
      {path:'addbug', component:AddbugComponent, canActivate:[TokenGuard]}
      ], 
      {useHash:false}),
      ReactiveFormsModule
  ],
  entryComponents:[
    AlertMessageComponent //se configura para enviar alertas
  ],
  
  providers: [AccountService, BugsService,BugguardGuard, TokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
