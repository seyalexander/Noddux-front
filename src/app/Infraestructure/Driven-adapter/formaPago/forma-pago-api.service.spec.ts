import { TestBed } from '@angular/core/testing';

import { FormaPagoApiService } from './forma-pago-api.service';

describe('FormaPagoApiService', () => {
  let service: FormaPagoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormaPagoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
