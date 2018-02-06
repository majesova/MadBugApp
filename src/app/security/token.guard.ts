import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AccountService} from './account.service'

@Injectable()
export class TokenGuard implements CanActivate {

constructor(private accountService: AccountService, private router : Router){

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      console.log(this.accountService.getIsValidSession());
      
      if(this.accountService.getIsValidSession()){
        return true;
      }
      else {
        this.router.navigate(['/auth']);
      }
  }
}
