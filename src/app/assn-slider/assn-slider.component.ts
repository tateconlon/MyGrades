import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Assn } from '../assn';

@Component({
  selector: 'app-assn-slider',
  templateUrl: './assn-slider.component.html',
  styleUrls: ['./assn-slider.component.css']
})
export class AssnSliderComponent implements OnInit {
  //@Input() assn: Assn;
  assn: Assn = new Assn();
//  @Output() assnChange = EventEmitter<Assn>();
  //@Input() var changedFunc: () => void;
  constructor() {
}
  ngOnInit() {
  }

   f(event:any) : void {
     //changedFunc();
     console.log(event);
    this.assn.mark = event.value;
   }


}
