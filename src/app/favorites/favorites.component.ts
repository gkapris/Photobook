import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IPexelsPhoto } from '../shared/interfaces/IPexelsPhoto.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  private favoritePhotoList: number[] = [];
  subscriptions: Subscription[] = [new Subscription()];
  favoritePhotos: IPexelsPhoto[] = [];

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.favoritePhotoList = this.appService.getFavoritePhotosList();
    this.favoritePhotoList.forEach((id) => {
      this.subscriptions.push(
        this.appService
          .getFavoritePhotoById(id)
          .subscribe((photo: IPexelsPhoto) => {
            this.favoritePhotos.push(photo);
          })
      );
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  navigateToPhotoDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
