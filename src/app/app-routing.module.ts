import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'topnav', component: TopnavComponent },
  { path: 'products', component: ProductsComponent, canActivate : [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] },
  { path: 'contact-us', component: ContactUsComponent, canActivate : [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
