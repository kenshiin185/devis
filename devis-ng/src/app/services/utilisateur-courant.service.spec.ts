import { TestBed } from '@angular/core/testing';

import { UtilisateurCourantService } from './utilisateur-courant.service';

describe('UtilisateurCourantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilisateurCourantService = TestBed.get(UtilisateurCourantService);
    expect(service).toBeTruthy();
  });
});
