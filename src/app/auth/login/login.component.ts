import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/admin/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
 
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';
        console.log('inside login component' + redirect);
        // Redirect the user
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
