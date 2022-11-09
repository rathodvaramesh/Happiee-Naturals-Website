import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {

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
    }
  ];

  //TODO used for bicycle images in different components

  constructor() { }

  ngOnInit(): void {
  }

}
