/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaterialsService } from './materials.service';

describe('Service: Materials', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialsService]
    });
  });

  it('should ...', inject([MaterialsService], (service: MaterialsService) => {
    expect(service).toBeTruthy();
  }));
});