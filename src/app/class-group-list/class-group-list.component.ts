import { Component, OnInit } from '@angular/core';
import { ClassesGroupService } from '../class-group.service';
import { ClassesGroup } from '../data-model/data-objects.type';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-class-group-list',
  templateUrl: './class-group-list.component.html',
  styleUrls: ['./class-group-list.component.scss'],
})
export class ClassesGroupListComponent implements OnInit {
  classesGroupList: ClassesGroup[] = [];

  constructor(private classesGroupService: ClassesGroupService) {}

  ngOnInit(): void {
    this.classesGroupService.getAll().subscribe((itemList) => {
      // console.log('[DEBUG] [ClassesGroupListComponent] read');
      itemList.forEach((item) => {
        this.classesGroupList.push({ ...item });
        console.log(
          '[DEBUG] [ClassesGroupListComponent] read',
          JSON.stringify(item)
        );
      });
    });
  }

  add(): void {
    this.classesGroupService
      .add({
        name: '6ieme1',
        maxPupils: 30,
        courseBucketList: [],
        id: 0,
      })
      .subscribe((item) => this.classesGroupList.push({ ...item }));
    // I copy the item sent to avoid updating data that should be kept separated
  }

  countPupils(): number {
    let totalPupils = 0;
    this.classesGroupList.forEach((group) => (totalPupils += group.maxPupils));
    return totalPupils;
  }

  removeGroup(group: ClassesGroup): void {
    this.classesGroupService.remove(group).subscribe((item) => {
      this.classesGroupList = this.classesGroupList.filter(
        (classGroupItem) => classGroupItem.id !== item.id
      );
    });
  }

  // upload($event): void {
  //   if ($event.target.files.length > 0) {
  //     const file = $event.target.files[0];
  //     this.classesGroupService.parseFile(file);
  //   }
  // }
}
