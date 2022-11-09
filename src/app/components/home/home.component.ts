import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activeImage = 1;
  imageObject = [
    {
      image: '../../../assets/images/honey/jungle_honey_250gms.jpg',
      thumbImage: '../../../assets/images/honey/jungle_honey_250gms.jpg',
      alt: 'Happiee Naturals Organic Jungle Honey - 250gms, Pack of 1, Free From Sugar Syrup',
      active: false,
    },
    {
      image: '../../../assets/images/honey/jungle_honey_250gms_usage.jpg',
      thumbImage: '../../../assets/images/honey/jungle_honey_250gms_usage.jpg',
      alt: 'Happiee Naturals Organic Jungle Honey - 250gms, Pack of 1, Free From Sugar Syrup',
      active: false,
    },
    {
      image: '../../../assets/images/honey/jungle_honey_250gms_usage1.jpg',
      thumbImage: '../../../assets/images/honey/jungle_honey_250gms_usage1.jpg',
      alt: 'Happiee Naturals Organic Jungle Honey - 250gms, Pack of 1, Free From Sugar Syrup',
      active: false,
    },
    {
      image: '../../../assets/images/honey/jungle_honey_250gms.jpg',
      thumbImage: '../../../assets/images/honey/jungle_honey_250gms.jpg',
      alt: 'Happiee Naturals Organic Jungle Honey - 250gms, Pack of 1, Free From Sugar Syrup',
      active: false,
    },
    {
      image: '../../../assets/images/honey/jungle_honey_250gms_usage.jpg',
      thumbImage: '../../../assets/images/honey/jungle_honey_250gms_usage.jpg',
      alt: 'Happiee Naturals Organic Jungle Honey - 250gms, Pack of 1, Free From Sugar Syrup',
      active: false,
    },
    {
      image: '../../../assets/images/honey/jungle_honey_250gms_usage1.jpg',
      thumbImage: '../../../assets/images/honey/jungle_honey_250gms_usage1.jpg',
      alt: 'Happiee Naturals Organic Jungle Honey - 250gms, Pack of 1, Free From Sugar Syrup',
      active: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.imageObject.length; i++) {
      this.imageObject[i].active = false;
    }
    const slick = document.querySelector(".slider-container-right__slick-images");
    console.log(slick);
    this.openSlider();
  }

  onClickArrow(n: number) {
    if (this.activeImage >= this.imageObject.length) {
      this.activeImage = 1;
    } else if (n >= 1) {
      this.activeImage = this.activeImage + n;
    } else if (n < 1) {
      this.activeImage = 1;
    }
  }

  openSlider() {}
}
