import { TestBed, inject } from '@angular/core/testing';

import { TokenHelperService } from './token-helper.service';

describe('TokenHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenHelperService]
    });
  });

  it('should be created', inject([TokenHelperService], (service: TokenHelperService) => {
    expect(service).toBeTruthy();
  }));
});
