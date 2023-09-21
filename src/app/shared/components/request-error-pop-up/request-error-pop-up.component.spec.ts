import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestErrorPopupComponent } from './request-error-pop-up.component';

describe('RequestErrorPopupComponent', () => {
  let component: RequestErrorPopupComponent;
  let fixture: ComponentFixture<RequestErrorPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestErrorPopupComponent],
    });
    fixture = TestBed.createComponent(RequestErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
