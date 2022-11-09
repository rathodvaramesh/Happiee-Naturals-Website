import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  id: string | null = null;
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit() {
    // this.id = localStorage.getItem('token');
    this.id = sessionStorage.getItem('userToken');
    console.log(this.id);
  }
  logout() {
    console.log('logout');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
