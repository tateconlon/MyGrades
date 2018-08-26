import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-comp',
  templateUrl: './course-comp.component.html',
  styleUrls: ['./course-comp.component.css']
})
export class CourseCompComponent implements OnInit {

  course: Course = new Course();

  constructor() { }

  ngOnInit() {
  }

  something() : void {
  //  course.currentMark = course.currentMark + 1;
  }

}
