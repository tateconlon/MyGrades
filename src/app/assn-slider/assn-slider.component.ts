import { Component, OnInit } from '@angular/core';
import { Assn } from '../assn';

@Component({
  selector: 'app-assn-slider',
  templateUrl: './assn-slider.component.html',
  styleUrls: ['./assn-slider.component.css']
})
export class AssnSliderComponent implements OnInit {
  assn: Assn = new Assn();
  constructor() {}
  ngOnInit() {
  }

}
