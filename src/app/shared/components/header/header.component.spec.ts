import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isActive correctly for "/photos" route', () => {
    jest.spyOn(router, 'url', 'get').mockReturnValue('/photos');
    expect(component.isActive('/photos')).toBeTruthy();
    expect(component.isActive('/favorites')).toBeFalsy();
  });

  it('should set isActive correctly for "/favorites" route', () => {
    jest.spyOn(router, 'url', 'get').mockReturnValue('/favorites');
    expect(component.isActive('/photos')).toBeFalsy();
    expect(component.isActive('/favorites')).toBeTruthy();
  });
});
