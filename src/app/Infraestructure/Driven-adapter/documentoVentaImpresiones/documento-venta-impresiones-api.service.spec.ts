import { TestBed } from '@angular/core/testing';

import { DocumentoVentaImpresionesApiService } from './documento-venta-impresiones-api.service';

describe('DocumentoVentaImpresionesApiService', () => {
  let service: DocumentoVentaImpresionesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentoVentaImpresionesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
