import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Assn } from '../assn';

@Component({
  selector: 'app-assn-slider',
  templateUrl: './assn-slider.component.html',
  styleUrls: ['./assn-slider.component.css']
})
export class AssnSliderComponent implements OnInit {
  @Input() assn: Assn;
  //assn: Assn = new Assn();
  @Output() notify = new EventEmitter<any>();
  /*@Input()*/ //changedFunc: () => void;
  constructor() {
}
  ngOnInit() {
    //this.changedFunc = test;
  }

   f(event:any) : void {
     //changedFunc();
     //console.log(changedFunc);
    this.assn.mark = event.value;
    this.notify.emit(null);
   }

   test() : void {
     console.log("hi");
   }


}
