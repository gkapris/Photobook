import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesComponent } from './favorites.component';
import { of } from 'rxjs';
import { AppService } from '../app.service';
import { IPexelsPhoto } from '../shared/interfaces/IPexelsPhoto.interface';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let appService: AppService;
  let fixture: ComponentFixture<FavoritesComponent>;

  const mockFavoritePhotoList: number[] = [1, 2, 3];
  const mockPhotos: IPexelsPhoto[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ] as IPexelsPhoto[];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      imports: [HttpClientModule],
      providers: [AppService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    appService = TestBed.inject(AppService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('#ngOnInit', () => {
  //   it.('should fetch the favorite photos', () => {
  //     jest
  //       .spyOn(appService, 'getFavoritePhotoById')
  //       .mockImplementation((id: number) => {
  //         const photo = mockPhotos.find((p) => p.id === id);
  //         return of(photo);
  //       });

  //     expect(appService.getFavoritePhotosList).toHaveBeenCalled();
  //     expect(appService.getFavoritePhotoById).toHaveBeenCalledTimes(
  //       mockFavoritePhotoList.length
  //     );
  //     expect(component.favoritePhotos).toEqual(mockPhotos);
  //   });
  // });

  describe('#ngOnDestroy', () => {
    it('should unsubscribe the subscriptions', () => {
      const unsubscribeSpy = jest.spyOn(
        component.subscriptions[0],
        'unsubscribe'
      );
      component.ngOnDestroy();
      expect(unsubscribeSpy).toHaveBeenCalled();
    });
  });
});
