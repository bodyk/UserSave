import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationloginService } from './authenticationlogin.service';

describe('AuthenticationloginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationloginService]
    });
  });

  it('should be created', inject([AuthenticationloginService], (service: AuthenticationloginService) => {
    expect(service).toBeTruthy();
  }));
});
