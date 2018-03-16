/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InMemoryMaterialDataService } from './inMemoryMaterialData.service';

describe('Service: InMemoryMaterialData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryMaterialDataService]
    });
  });

  it('should ...', inject([InMemoryMaterialDataService], (service: InMemoryMaterialDataService) => {
    expect(service).toBeTruthy();
  }));
});