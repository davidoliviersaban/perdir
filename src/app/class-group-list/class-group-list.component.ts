import { Component, OnInit } from '@angular/core';
import { ClassesGroupService } from '../class-group.service';
import { ClassesGroup } from '../data-model/data-objects.type';
@Component({
  selector: 'app-class-group-list',
  templateUrl: './class-group-list.component.html',
  styleUrls: ['./class-group-list.component.scss']
})
export class ClassesGroupListComponent implements OnInit {
  ClassesGroupList: ClassesGroup[] = [];

  constructor(
    private classesGroupService: ClassesGroupService
  ) { }

  ngOnInit(): void {
  }

  addClassesGroup(): void {
    this.classesGroupService.addClassesGroup({
      name: '6ieme1',
      maxPupils: 30,
      courseBucketList: [],
      id: 0
    }).subscribe(item => this.ClassesGroupList.push(item));
  }


}
