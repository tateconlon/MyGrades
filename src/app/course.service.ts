import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSE } from './mock-course';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseURL = 'api/Course'; //URL to web api

  getCourse(): Observable<Course>{
     return of(COURSE);
    //return this.http.get<Course>(this.courseURL)
  }

  constructor(
    private http: HttpClient
  ) { }
}
