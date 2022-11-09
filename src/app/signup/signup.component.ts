import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signupModel } from '../models/signup/signup';
import { SignupService } from '../services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupData: signupModel = {
    email: 'rathodramesh213@gmail.com',
    pwd: 'Ramesh@123',
    repeatPwd: 'Ramesh@123',
  };

  constructor(private userSignup: SignupService, private router: Router) {}

  signup() {
    this.userSignup.userRegistration(this.signupData).subscribe((res: any) => {
      if (res.email) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit(): void {}
}
