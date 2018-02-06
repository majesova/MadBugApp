import { TestBed, async, inject } from '@angular/core/testing';

import { BugguardGuard } from './bugguard.guard';

describe('BugguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugguardGuard]
    });
  });

  it('should ...', inject([BugguardGuard], (guard: BugguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
