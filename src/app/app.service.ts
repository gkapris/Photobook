import { BehaviorSubject, Observable, interval, switchMap, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PexelsURLSEnum } from './shared/constants/URLS_Enums';
import { PexelsAPIKey } from './shared/constants/PhotoAPIKey';
import {
  IPexelsListResponse,
  IPexelsPhoto,
} from './shared/interfaces/IPexelsPhoto.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  photosList$ = new BehaviorSubject<IPexelsPhoto[]>([]);
  private favoritePhotos: number[] = [];
  private headers = new HttpHeaders({
    Authorization: PexelsAPIKey,
  });
  constructor(private http: HttpClient) {}

  getFavoritePhotosList(): number[] {
    return this.favoritePhotos;
  }

  getPhotoList(): void {
    let counter = 1;
    interval(5000)
      .pipe(
        switchMap(() => {
          const params = new HttpParams()
            .set('query', 'nature')
            .set('per_page', '4')
            .set('page', counter++);
          return this.http.get<IPexelsListResponse>(
            PexelsURLSEnum.GetPhotosListByCategory,
            {
              params,
              headers: this.headers,
            }
          );
        }),
        tap((response: IPexelsListResponse) => {
          const currentResponse = this.photosList$.getValue();
          this.photosList$.next([...currentResponse, ...response.photos]);
        })
      )
      .subscribe();
  }

  saveFavoritePhoto(id: number) {
    this.favoritePhotos.push(id);
  }

  getFavoritePhotoById(id: number): Observable<IPexelsPhoto> {
    return this.http.get<IPexelsPhoto>(PexelsURLSEnum.GetPhotoById + id, {
      headers: this.headers,
    });
  }
}
