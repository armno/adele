import { TestBed, inject } from '@angular/core/testing';

import { SecretService } from './secret.service';

describe('SecretService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecretService]
    });
  });

  it('should ...', inject([SecretService], (service: SecretService) => {
    expect(service).toBeTruthy();
  }));
});
