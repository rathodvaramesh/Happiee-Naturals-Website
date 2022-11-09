import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  constructor() { }
  title = 'practice';
  ngOnInit(): void {
  }

}
