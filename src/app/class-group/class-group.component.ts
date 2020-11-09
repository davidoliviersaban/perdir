import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ClassesGroupService } from '../class-group.service';

import { ClassesGroup } from '../data-model/data-objects.type';

@Component({
  selector: 'app-class-group',
  templateUrl: './class-group.component.html',
  styleUrls: ['./class-group.component.scss']
})

export class ClassesGroupComponent implements OnInit {
  @Input() ClassesGroupId: number;
  classesGroup: ClassesGroup;
  maxBuckets: number;
  @Output() notify = new EventEmitter();

  constructor(
    private classesGroupService: ClassesGroupService
  ) { }

  ngOnInit(): void {
    this.classesGroupService.get(this.ClassesGroupId).subscribe(item => this.classesGroup = item);
    this.maxBuckets = this.classesGroupService.getMaxBucketPerClassesGroup();
  }

  deleteMe(): void {
    this.notify.emit();
  }

  addClassesBucket(): void {
    if (this.classesGroup.courseBucketList.length === this.maxBuckets) { return; }
    this.classesGroup.courseBucketList.push(
      { nbPupils: 10,
        courseList: []
      }
    );
  }

  change(): void {
    this.classesGroupService.update(this.classesGroup);
  }

  removeClassesBucket(id: number): void {
    this.classesGroup.courseBucketList.splice(id, 1);
  }

  countPupils(): number {
    let totalPupils = 0;
    this.classesGroup.courseBucketList.forEach(bucket => totalPupils += bucket.nbPupils);
    return totalPupils;
  }

  getStyle(): any {
    const color = this.isOvercrowded() ? 'sandybrown' : (this.isFull() ? 'lightgreen' : 'transparent');
    return {
      backgroundColor: color,
    };
  }

  isFull(): boolean {
    return (this.classesGroup.maxPupils - this.countPupils()) === 0;
  }

  isOvercrowded(): boolean {
    return (this.classesGroup.maxPupils - this.countPupils()) < 0;
  }
}
