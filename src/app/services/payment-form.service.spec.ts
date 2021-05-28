import { TestBed } from '@angular/core/testing';

import { PaymentFormService } from './payment-form.service';

describe('PaymentFormService', () => {
  let service: PaymentFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
