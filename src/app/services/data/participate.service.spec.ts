import { TestBed } from '@angular/core/testing';

import { ParticipateService } from './participate.service';

describe('ParticipateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticipateService = TestBed.get(ParticipateService);
    expect(service).toBeTruthy();
  });
});
