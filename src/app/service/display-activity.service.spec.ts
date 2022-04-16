import { TestBed } from '@angular/core/testing';

import { DisplayActivityService } from './display-activity.service';

describe('DisplayActivityService', () => {
  let service: DisplayActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
