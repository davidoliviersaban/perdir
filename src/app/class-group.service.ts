import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClassesGroup } from './data-model/data-objects.type';

@Injectable({
  providedIn: 'root',
})
export class ClassesGroupService {
  classGroupList: ClassesGroup[] = [];

  constructor() {}

  getClassesGroup(id: number): Observable<ClassesGroup> {
    return of(this.classGroupList.find((item) => item.id === id));
  }

  addClassesGroup(classGroup: ClassesGroup): Observable<ClassesGroup> {
    classGroup.id = this.classGroupList.length;
    this.classGroupList.push(classGroup);
    return this.getClassesGroup(classGroup.id);
  }

  updateClassesGroup(classGroup: ClassesGroup): Observable<any> {
    this.classGroupList[classGroup.id] = classGroup;
    return this.getClassesGroup(classGroup.id);
  }

  getMaxBucketPerClassesGroup(): number {
    return 4;
  }
}
