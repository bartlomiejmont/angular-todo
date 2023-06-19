import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  clickHandleLoginLogout() {
    if (this.validateToken()) {
      this.logout();
    } else {
      this.login();
    }
  }

  login() {
    this.cookieService.set('auth_token', 'token123');
  }

  validateToken() {
    const token = this.cookieService.get('auth_token');
    if (token === 'token123') {
      return true;
    }
    return false;
  }

  logout() {
    this.cookieService.deleteAll();
  }
}
