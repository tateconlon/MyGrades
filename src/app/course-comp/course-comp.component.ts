import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-comp',
  templateUrl: './course-comp.component.html',
  styleUrls: ['./course-comp.component.css']
})
export class CourseCompComponent implements OnInit {

  course: Course;

  constructor(private courseService: CourseService){ }

  getCourse(): void {
    this.courseService.getCourse()
    .subscribe(course => this.course = course);
  }


  recalculate():void {
    console.log('test');
    //iterate through the list and recalculate currentMark
    let avg: number = 0;
    for(let ass of this.course.assignments) {
    avg += ass.mark * ass.weight;
  }

    //avg = avg + (a.mark*a.weight);
    this.course.currentMark = avg;
}

  ngOnInit() {
    this.getCourse();
  }

  something() : void {
  //  course.currentMark = course.currentMark + 1;
  }

}
//const lib = require('lib');
//
// lib.username.bestTrekChar['@0.0.0']({name: 'spock'}, function (err, result) {
//
//   if (err) {
//     // handle it
//   }
//
//   // do something with result
//
// });
