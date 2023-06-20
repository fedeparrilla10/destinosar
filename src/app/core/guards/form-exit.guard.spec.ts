import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { formExitGuard } from './form-exit.guard';

describe('formExitGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formExitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
