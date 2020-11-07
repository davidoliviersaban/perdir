import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesGroupComponent } from './class-group.component';

describe('ClassesGroupComponent', () => {
  let component: ClassesGroupComponent;
  let fixture: ComponentFixture<ClassesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
