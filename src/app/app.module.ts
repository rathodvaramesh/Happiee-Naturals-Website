import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatSliderModule } from '@angular/material/slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InitialComponent } from './components/initial/initial.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SliderComponent } from './components/slider/slider.component';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ResNavBarComponent } from './components/res-nav-bar/res-nav-bar.component';
import { ResNavComponent } from './components/res-nav/res-nav.component';
import { ProductsComponent } from './components/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductTileComponent } from './components/product-tile-3/product-tile.component';
import { ProductTilesComponent } from './components/product-tile-4/product-tiles/product-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    HomeComponent,
    DashboardComponent,
    SliderComponent,
    FooterComponent,
    TopnavComponent,
    NotFoundComponent,
    HeaderComponent,
    ContactUsComponent,
    ResNavBarComponent,
    ResNavComponent,
    ProductsComponent,
    ProductTileComponent,
    ProductTilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
