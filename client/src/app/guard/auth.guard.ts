import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true
    // Get the current user and store it in currentUser constant
    // Check if currentUser exists
      // check if route is restricted by role
        // role not authorised so redirect to home page and return false
      // authorised so return true
    // not logged in so redirect to login page with the return url and return false
    }

    canActivateChild(): boolean {
      return true;
  }

}
