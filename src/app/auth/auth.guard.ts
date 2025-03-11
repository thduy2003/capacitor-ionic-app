import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(!this.authService.userIsAuthenticated) {
      this.router.navigateByUrl('/auth');
    }
    return this.authService.userIsAuthenticated;
  }
  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    return this.canActivate(route);
  }
}
