import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSE } from './mock-course';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourse(): Observable<Course>{
    return of(COURSE);
  }
  constructor() { }
}
