import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';
import { LoaderService } from '../../services/loader.service';

const mockService = {
  getLoading: jest.fn(() => true),
};

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      providers: [{ provide: LoaderService, useValue: mockService }],
    });
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#setLoading', () => {
    it('should return the value from the loader service', () => {
      const returnedValue = component.setLoading();
      expect(returnedValue).toEqual(true);
    });
  });
});
