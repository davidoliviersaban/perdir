import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClassesGroupService } from '../class-group.service';
import { CourseService } from '../course.service';
import { ClassesBucket, Course } from '../data-model/data-objects.type';

@Component({
  selector: 'app-course-bucket-details',
  templateUrl: './course-bucket-details.component.html',
  styleUrls: ['./course-bucket-details.component.scss'],
})
export class ClassesBucketDetailsComponent implements OnInit {
  @Input() courseBucket: ClassesBucket;
  @Input() position: number;
  @Input() groupClassId: number;
  @Output() notify = new EventEmitter();

  constructor(
    private courseService: CourseService,
    private classesGroupService: ClassesGroupService
  ) {}

  ngOnInit(): void {
    this.addCourse();
  }

// for ngSelect
//  ngAfterViewInit(): void {
//    document.getElementById('preloader').classList.add('hide');
//  }

  addCourse(): void {
    this.courseService.getAll().subscribe((itemList) => {
      itemList.forEach((item) => {
        if (!this.courseBucket.courseList.find(c => c.id === item.id)) {
          const course: Course = { ...item };
          course.enabled = true;
          this.courseBucket.courseList.push(course);
        }
      });
    });
  }

  removeCourse(course: Course): void {
    this.courseBucket.courseList = this.courseBucket.courseList.filter(c => c.id !== course.id);
  }

  deleteMe(): void {
    this.notify.emit();
  }

  stringify(object): string {
    return JSON.stringify(object);
  }
}
