import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesBucketDetailsComponent } from './course-bucket-details.component';

describe('ClassesBucketDetailsComponent', () => {
  let component: ClassesBucketDetailsComponent;
  let fixture: ComponentFixture<ClassesBucketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesBucketDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesBucketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
