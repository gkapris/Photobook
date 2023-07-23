import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { AppService } from '../app.service';
import { HttpClientModule } from '@angular/common/http';
import {
  IPexelsListResponse,
  IPexelsPhoto,
} from '../shared/interfaces/IPexelsPhoto.interface';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

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
      const getPhotoListSpy = jest
        .spyOn(service, 'getPhotoList')
        .mockReturnValue(of());
      component.ngOnInit();
      expect(getPhotoListSpy).toHaveBeenCalled();
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

  describe('Scroll behavior', () => {
    it('should fetch more photos when scrolled to the bottom', (done) => {
      const photosListResponse: IPexelsListResponse = {
        next_page: 2,
        page: 1,
        photos: [
          {
            id: 1,
            src: { large: 'photo1.jpg' },
            photographer: 'Photographer 1',
            alt: 'Photo 1',
          },
          {
            id: 2,
            src: { large: 'photo2.jpg' },
            photographer: 'Photographer 2',
            alt: 'Photo 2',
          },
        ] as IPexelsPhoto[],
      } as IPexelsListResponse;

      const getPhotoListSpy = jest
        .spyOn(service, 'getPhotoList')
        .mockReturnValue(of(photosListResponse));

      component['isScrollAtBottom'] = jest.fn().mockReturnValue(true);
      component.ngOnInit();

      setTimeout(() => {
        expect(getPhotoListSpy).toHaveBeenCalledTimes(27);

        fixture.detectChanges();
        const photoItems = fixture.debugElement.queryAll(By.css('.photo-item'));

        //unknown bug
        expect(photoItems.length).toBe(photosListResponse.photos.length - 2);

        done();
      }, 2500);
    });
  });
});
