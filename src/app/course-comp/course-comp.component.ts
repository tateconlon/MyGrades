import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-comp',
  templateUrl: './course-comp.component.html',
  styleUrls: ['./course-comp.component.css']
})
export class CourseCompComponent implements OnInit {

  course: Course = new Course();

  recalculate():void {
    console.log('test');
    //iterate through the list and recalculate currentMark

    //avg = avg + (a.mark*a.weight);
    //course.currentMark = avg;
}

  constructor() { }

  ngOnInit() {
  }

  something() : void {
  //  course.currentMark = course.currentMark + 1;
  }

}
