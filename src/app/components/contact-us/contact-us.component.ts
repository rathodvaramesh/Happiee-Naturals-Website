import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}


  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
