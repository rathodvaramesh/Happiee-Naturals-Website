import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-res-nav-bar',
  templateUrl: './res-nav-bar.component.html',
  styleUrls: ['./res-nav-bar.component.scss']
})
export class ResNavBarComponent implements OnInit {

  // toggle: HTMLElement | null = null;
  
  constructor() {
  }
  
  ngOnInit(): void {
  }

  // const menu = document.querySelector(".menu");
  // const toggle = document.querySelector(".toggle");
  /* Toggle mobile menu */
  // toggleMenu() {
  //     if (this.menu.classList.contains("active")) {
  //         menu.classList.remove("active");
          
  //         // adds the menu (hamburger) icon
  //         toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
  //     } else {
  //         menu.classList.add("active");
          
  //         // adds the close (x) icon
  //         toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
  //     }
  // }
 
  // /* Event Listener */
  // toggle.addEventListener("click", toggleMenu, false);

  // const items = document.querySelectorAll(".item");
 
/* Activate Submenu */
toggleItem() {
  // if (this.classList.contains("submenu-active")) {
  //   this.classList.remove("submenu-active");
  // } else if (menu.querySelector(".submenu-active")) {
  //   menu.querySelector(".submenu-active").classList.remove("submenu-active");
  //   this.classList.add("submenu-active");
  // } else {
  //   this.classList.add("submenu-active");
  // }
}
 
/* Event Listeners */
// for (let item of items) {
//     if (item.querySelector(".submenu")) {
//       item.addEventListener("click", toggleItem, false);
//       item.addEventListener("keypress", toggleItem, false);
//     }   
// }

}
