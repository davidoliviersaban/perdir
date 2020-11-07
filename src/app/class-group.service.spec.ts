import { TestBed } from '@angular/core/testing';

import { ClassesGroupService } from './class-group.service';

describe('ClassesGroupService', () => {
  let service: ClassesGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassesGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
