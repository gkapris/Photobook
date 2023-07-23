import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { AppService } from '../app.service';
import { IPexelsPhoto } from '../shared/interfaces/IPexelsPhoto.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit, OnDestroy {
  photos: Observable<IPexelsPhoto[]> = new Observable<IPexelsPhoto[]>();
  private subscriptions: Subscription[] = [];
  private fetchingData = false;

  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.appService.getPhotoList();
    this.photos = this.appService.photosList$.asObservable();

    this.subscriptions.push(
      timer(0, 200).subscribe(() => {
        if (this.isScrollAtBottom() && !this.fetchingData) {
          this.fetchingData = true;
          this.appService.getPhotoList().subscribe(() => {
            this.fetchingData = false;
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  addToFavorites(id: number) {
    this.appService.saveFavoritePhoto(id);
  }

  private isScrollAtBottom(): boolean {
    const windowHeight =
      'innerHeight' in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const scrollY = window.screenY || document.documentElement.scrollTop;
    const scrollPosition = scrollY + windowHeight;
    return scrollPosition >= docHeight;
  }
}
