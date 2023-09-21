import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PexelsAPIKey } from './shared/constants/PhotoAPIKey';
import { PexelsURLSEnum } from './shared/constants/URLS.enum';
import {
  IPexelsListResponse,
  IPexelsPhoto,
} from './shared/interfaces/IPexelsPhoto.interface';
import { MatDialog } from '@angular/material/dialog';
import { RequestErrorPopupComponent } from './shared/components/request-error-pop-up/request-error-pop-up.component';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  photosList$ = new BehaviorSubject<IPexelsPhoto[]>([]);
  pageRequestedCounter: number = 0;
  private favoritePhotos: number[] = [];
  private headers = new HttpHeaders({
    Authorization: PexelsAPIKey,
  });

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  getPhotoList(): Observable<IPexelsListResponse> {
    this.pageRequestedCounter++;
    const params = new HttpParams()
      .set('query', 'nature')
      .set('per_page', 16)
      .set('page', this.pageRequestedCounter);

    return this.http
      .get<IPexelsListResponse>(PexelsURLSEnum.GetPhotosListByCategory, {
        params,
        headers: this.headers,
      })
      .pipe(
        tap((response: IPexelsListResponse) => {
          this.photosList$.next([
            ...this.photosList$.getValue(),
            ...response.photos,
          ]);
        })
      );
  }

  getFavoritePhotosList(): number[] {
    return this.favoritePhotos;
  }

  saveFavoritePhoto(id: number) {
    this.favoritePhotos.push(id);
  }

  removeFavoritePhoto(id: number): void {
    this.favoritePhotos = this.favoritePhotos.filter((inId) => inId !== id);
  }

  getFavoritePhotoById(id: number): Observable<IPexelsPhoto> {
    return this.http.get<IPexelsPhoto>(PexelsURLSEnum.GetPhotoById + id, {
      headers: this.headers,
    });
  }

  showErrorPopup(error: HttpErrorResponse): void {
    this.dialog.open(RequestErrorPopupComponent, {
      data: {
        errorStatus: error.status,
        errorContent: error.message,
      },
    });
  }
}
