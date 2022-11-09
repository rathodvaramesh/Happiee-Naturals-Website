import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login/login';
import { AuthService } from '../services/auth/auth.service';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: LoginModel = {
    userid: 'rathodramesh213@gmail.com',
    password: 'Ramesh@123'
  };

  constructor(
    private LoginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.LoginService.authenticateUser(this.model).subscribe((val: any) => {
      if (val.status == 200) {
        // local stoarge method
        // localStorage.setItem('isLoggedIn', 'true');
        // localStorage.setItem('token', this.model.userid);

        // sesson storage method
        sessionStorage.setItem('isUserLoggedIn', 'true')
        sessionStorage.setItem('userToken', this.model.userid);

        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

}
