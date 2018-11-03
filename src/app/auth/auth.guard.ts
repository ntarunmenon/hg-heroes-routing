import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../admin/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  
  
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('inside auth guard');
      let url: string = state.url;
      return this.checkLogin(url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute,state);
  }

  canLoad(route: Route) {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { 
      console.log('AuthGuard#checkLogin inside true');
      return true; 
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

     // Create a dummy session id
     let sessionId = 123456789;

     // Set our navigation extras object
     // that contains our global query params and fragment
     let navigationExtras: NavigationExtras = {
       queryParams: { 'session_id': sessionId },
       fragment: 'anchor'
     };
     

    // Navigate to the login page with extras
    console.log('login called');
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}
