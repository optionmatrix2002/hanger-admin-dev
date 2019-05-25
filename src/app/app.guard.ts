import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  constructor(private router : Router) { }
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var userdata = JSON.parse(localStorage.getItem('login_user_info'));
    if(userdata && userdata.auth_token)
      return true;
    else 
      return false;
  }
}
