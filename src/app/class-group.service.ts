import { Injectable } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { ClassesGroup } from './data-model/data-objects.type';
import { UploadService } from './upload.service';
import * as saveAs from 'file-saver';
import { isThisTypeNode } from 'typescript';

@Injectable({
  providedIn: 'root',
})
export class ClassesGroupService {
  classGroupList: ClassesGroup[] = [];
  nextIndex: number;

  constructor(
    private uploadService: UploadService
  ) {
    this.nextIndex = 0;
    this.uploadService.get().subscribe(list => {
      list.forEach(item => this.classGroupList.push(item));
      this.nextIndex = Math.max(...list.map(item => item.id)) + 1;
      console.log('nextIndex will be', this.nextIndex);
    });
  }

  async init(): Promise<any> {
    return this.uploadService.get().toPromise();
  }

  getAll(): Observable<ClassesGroup[]> {
    return of(this.classGroupList);
  }

  get(id: number): Observable<ClassesGroup> {
    return of(this.classGroupList.find((item) => item.id === id));
  }

  add(classGroup: ClassesGroup): Observable<ClassesGroup> {
    this.nextIndex++;
    classGroup.id = this.nextIndex;
    this.classGroupList.push(classGroup);
    this.uploadService.post(classGroup).subscribe();
    return this.get(classGroup.id);
  }

  remove(classGroup: ClassesGroup): Observable<ClassesGroup> {
    console.log('[DEBUG][ClassGroupService] received item to remove', JSON.stringify(classGroup));
    this.classGroupList = this.classGroupList.filter(item => item.id !== classGroup.id);
    this.uploadService.delete(classGroup).subscribe();
    return of(classGroup);
  }

  update(classGroup: ClassesGroup): void {
    console.log('[DEBUG][ClassGroupService] update on item', JSON.stringify(classGroup));
    const group = this.classGroupList.find((item) => item.id === classGroup.id);
    Object.keys(group).forEach(key => group[key] = classGroup[key]);
    this.uploadService.put(classGroup).subscribe(
      (res) => console.log('OK', JSON.stringify(res)),
      (err) => console.error('[ERROR]', err));
  }

  getMaxBucketPerClassesGroup(): number {
    return 4;
  }

  // parseFile(file: File): void {
  //   const fileReader = new FileReader();
  //   fileReader.readAsText(file);
  //   fileReader.onloadend = (e) => {
  //     console.log('File read', fileReader.result);
  //     this.readData(null, `${fileReader.result}`);
  //   };
  // }

  // readData(classesGroupList?: ClassesGroup[], dataString?: string): void {
  //   console.log('[DEBUG]CompleteModel is', JSON.stringify(classesGroupList), 'string is', dataString);
  //   const data = (!!dataString) ? JSON.parse(dataString) : classesGroupList;
  //   const jsonArray: ClassesGroup[] = data;
  //   jsonArray.forEach( json => this.classGroupList.push({...json}));
  // }

  download(): void {
    const filename = 'perdir.json';
    console.log('[ClassesGroupComponent] Download requested');
    const data = { classesGroupList: this.classGroupList };
    const file = new Blob([ JSON.stringify(data)] , { type: 'text/json;charset=utf-8' });
    return saveAs.saveAs(file, filename);
  }

}
