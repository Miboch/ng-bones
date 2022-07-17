import { TestBed } from '@angular/core/testing';

import { BonesService } from './bones.service';

describe('BonesService', () => {
  let service: BonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
