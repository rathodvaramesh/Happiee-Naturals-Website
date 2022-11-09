import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  logout(): void {
    // local stoarge method
    // localStorage.setItem('isLoggedIn', 'false');
    // localStorage.removeItem('token');

    // sesson storage method
    sessionStorage.setItem('isUserLoggedIn', 'false')
    sessionStorage.removeItem('userToken');
  }
}
