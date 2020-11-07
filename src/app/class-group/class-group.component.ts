import { Component, OnInit, Input } from '@angular/core';
import { ClassesGroupService } from '../class-group.service';

import { ClassesBucket, ClassesGroup, Course } from '../data-model/data-objects.type';

@Component({
  selector: 'app-class-group',
  templateUrl: './class-group.component.html',
  styleUrls: ['./class-group.component.scss']
})

export class ClassesGroupComponent implements OnInit {
  @Input() ClassesGroupId: number;
  classesGroup: ClassesGroup;
  maxBuckets: number;

  constructor(
    private classesGroupService: ClassesGroupService
  ) { }

  ngOnInit(): void {
    this.classesGroupService.getClassesGroup(this.ClassesGroupId).subscribe(item => this.classesGroup = item);
    this.maxBuckets = this.classesGroupService.getMaxBucketPerClassesGroup()
  }

  addClassesBucket(): void {
    if (this.classesGroup.courseBucketList.length === this.maxBuckets) { return; }
    this.classesGroup.courseBucketList.push(
      { nbPupils: 10,
        courseList: []
      }
    );
  }
  removeClassesBucket(id: number): void {
    this.classesGroup.courseBucketList.splice(id, 1);
  }
}
