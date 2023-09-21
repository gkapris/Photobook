import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppService } from '../app.service';
import { RequestErrorPopupComponent } from '../shared/components/request-error-pop-up/request-error-pop-up.component';
import { IPexelsPhoto } from '../shared/interfaces/IPexelsPhoto.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit, OnDestroy {
  photosList$: Observable<IPexelsPhoto[]> = new Observable<IPexelsPhoto[]>();
  private subscriptions: Subscription[] = [];

  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.loadNewPhotos();
    this.photosList$ = this.appService.photosList$.asObservable();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollThreshold = 20;

    if (documentHeight - scrollTop - windowHeight <= scrollThreshold) {
      this.loadNewPhotos();
    }
  }

  loadNewPhotos() {
    const randomDelay = Math.floor(Math.random() * 101) + 200;
    this.subscriptions.push(
      this.appService
        .getPhotoList()
        .pipe(delay(randomDelay))
        .subscribe({
          error: (error: HttpErrorResponse) => {
            this.appService.showErrorPopup(error);
          },
        })
    );
  }

  addToFavorites(id: number) {
    this.appService.saveFavoritePhoto(id);
  }
}
