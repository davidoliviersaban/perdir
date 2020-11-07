import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesGroupListComponent } from './class-group-list.component';

describe('ClassesGroupListComponent', () => {
  let component: ClassesGroupListComponent;
  let fixture: ComponentFixture<ClassesGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesGroupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
