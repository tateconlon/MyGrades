import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSE } from './mock-course';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseURL = 'https://mediquix.lib.id/mygrades@0.0.0/getCourse/?name=Isaiah&courseName=Calc'; //URL to web api

  getCourse(): Observable<Course>{
    return of(COURSE);
    //return this.http.get<Course>(this.courseURL)
  }

  constructor(
    private http: HttpClient
  ) { }
}
