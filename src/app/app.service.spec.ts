import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { AppService } from './app.service';
import {
  IPexelsListResponse,
  IPexelsPhoto,
} from './shared/interfaces/IPexelsPhoto.interface';
import { PexelsURLSEnum } from './shared/constants/URLS.enum';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;
  let mockPhotosList$: BehaviorSubject<IPexelsPhoto[]>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService],
    });

    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);

    mockPhotosList$ = new BehaviorSubject<IPexelsPhoto[]>([]);
    jest
      .spyOn(service.photosList$, 'getValue')
      .mockReturnValue(mockPhotosList$.getValue());
    jest
      .spyOn(service.photosList$, 'next')
      .mockImplementation(mockPhotosList$.next);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('#getPhotoList', () => {
    it('should fetch a list of photos', () => {
      const mockResponse: IPexelsListResponse = {
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
        ],
      } as IPexelsListResponse;

      service.getPhotoList().subscribe((response) => {
        expect(response).toEqual(mockResponse);
        expect(mockPhotosList$.getValue().length).toBe(
          mockResponse.photos.length
        );
      });

      const request = httpMock.expectOne(
        `${PexelsURLSEnum.GetPhotosListByCategory}?query=nature&per_page=4&page=1`
      );
      expect(request.request.method).toBe('GET');
      request.flush(mockResponse);
    });
  });

  describe('#saveFavoritePhot', () => {
    it('should add new ids to the services property', () => {
      const testingValue = 1223221;
      service.saveFavoritePhoto(testingValue);
      const savedValues = service.getFavoritePhotosList();
      expect(savedValues).toContain(testingValue);
    });
  });

  describe('#getFavoritePhotoById', () => {
    it('should fetch a favorite photo by ID', () => {
      const mockPhotoId = 123;
      const mockPhotoData: IPexelsPhoto = {
        id: mockPhotoId,
        src: { large: 'photo.jpg' },
        photographer: 'Photographer',
        alt: 'Photo',
      } as IPexelsPhoto;

      service
        .getFavoritePhotoById(mockPhotoId)
        .subscribe((photo: IPexelsPhoto) => {
          expect(photo).toBeTruthy();
          expect(photo).toEqual(mockPhotoData);
        });

      const request = httpMock.expectOne(
        `${PexelsURLSEnum.GetPhotoById}${mockPhotoId}`
      );
      expect(request.request.method).toBe('GET');
      request.flush(mockPhotoData);
    });
  });
});
