import { TestBed } from '@angular/core/testing';

import { CatalogContextServiceService } from './catalog-context-service.service';

describe('CatalogContextServiceService', () => {
  let service: CatalogContextServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogContextServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
