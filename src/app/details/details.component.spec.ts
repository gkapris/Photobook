import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { AppService } from '../app.service';
import { IPexelsPhoto } from '../shared/interfaces/IPexelsPhoto.interface';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let appService: Partial<AppService>;

  const mockPhotoId = 1;
  const mockPhoto: IPexelsPhoto = { id: 1 } as IPexelsPhoto;

  beforeEach(() => {
    appService = {
      getFavoritePhotoById: jest.fn().mockReturnValue(of(mockPhoto)),
    };
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        { provide: AppService, useValue: appService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '1',
              }),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the photo details from AppService on initialization', () => {
    expect(appService.getFavoritePhotoById).toHaveBeenCalledWith(mockPhotoId);
    expect(component.photo).toBeDefined();
  });
});
