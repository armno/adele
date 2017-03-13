import { AdalService } from 'ng2-adal/core';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private adalService: AdalService,
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.adalService.userInfo.isAuthenticated) {
      return true;
    }

    console.warn('You are not logged in');
    this.router.navigate(['/login']);
    return false;
  }
}
