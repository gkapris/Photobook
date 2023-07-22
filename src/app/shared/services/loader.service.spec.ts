import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#setLoading', () => {
    it('should update the loading property of the service', () => {
      service.setLoading(true);
      expect(service.getLoading()).toEqual(true);
    });
  });
  describe('#getLoading', () => {
    it('should return the loading property of the service', () => {
      const returnedValue = service.getLoading();
      expect(returnedValue).toEqual(false);
    });
  });
});
