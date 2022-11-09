import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tiles',
  templateUrl: './product-tiles.component.html',
  styleUrls: ['./product-tiles.component.scss']
})
export class ProductTilesComponent implements OnInit {

  imageObject = [
    {
      image: '../../../assets/images/bicycle/bicycle.jpg',
      thumbImage: '../../../assets/images/bicycle/bicycle.jpg',
      alt: 'bicycle images',
      active: false,
    },
    {
      image: '../../../assets/images/bicycle/bicycle-1.jpg',
      thumbImage: '../../../assets/images/bicycle/bicycle-1.jpg',
      alt: 'bicycle images',
      active: false,
    },{
      image: '../../../assets/images/bicycle/bicycle-2.jpg',
      thumbImage: '../../../assets/images/bicycle/bicycle-2.jpg',
      alt: 'bicycle images',
      active: false,
    },{
      image: '../../../assets/images/bicycle/bicycle-3.jpg',
      thumbImage: '../../../assets/images/bicycle/bicycle-3.jpg',
      alt: 'bicycle images',
      active: false,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
