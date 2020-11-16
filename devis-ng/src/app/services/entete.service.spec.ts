import { TestBed } from '@angular/core/testing';

import { EnteteService } from './entete.service';

describe('EnteteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnteteService = TestBed.get(EnteteService);
    expect(service).toBeTruthy();
  });
});
