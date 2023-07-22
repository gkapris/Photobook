import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonLabels } from '../../constants/ButtonLabels';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatButtonModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#changeButtonColor', () => {
    it('should return primary when selected path is equal with current path (draft)', () => {
      component.selectedPath = ButtonLabels.PHOTOS;
      const returnedValue = component.changeButtonColor(ButtonLabels.PHOTOS);
      expect(returnedValue).toEqual('primary');
    });

    it('should return blank when selected path is NOT equal with current path (draft)', () => {
      component.selectedPath = '';
      const returnedValue = component.changeButtonColor(ButtonLabels.PHOTOS);
      expect(returnedValue).toEqual('');
    });
  });
});
