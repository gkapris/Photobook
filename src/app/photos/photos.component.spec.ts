import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(PhotosComponent);
    service = TestBed.inject(AppService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should call getPhotoList from service', () => {
      jest.spyOn(service, 'getPhotoList');
      component.ngOnInit();
      expect(service.getPhotoList).toHaveBeenCalled();
    });
  });

  describe('#addToFavorites', () => {
    it('should add id to the savedPhotoList', () => {
      const testingValue = 1234;
      component.addToFavorites(testingValue);
      const returnedValue = service.getFavoritePhotosList();
      expect(returnedValue).toContain(testingValue);
    });
  });
});
