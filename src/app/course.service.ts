import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Course } from './data-model/data-objects.type';
import { MOCK_COURSES } from './data-model/mock-data';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses = MOCK_COURSES;

  constructor() {}

  get(id: number): Observable<Course> {
    return of(this.courses.find(item => item.id === id));
  }

  getAll(): Observable<Course[]> {
    return of(this.courses);
  }
}
