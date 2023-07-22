import { BehaviorSubject, interval, switchMap, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PexelsURLS } from './shared/constants/PexelsURLS.enum';
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
  constructor(private http: HttpClient) {}

  getPhotoList(): void {
    const headers = new HttpHeaders({
      Authorization: PexelsAPIKey,
    });
    let counter = 1;
    interval(1000)
      .pipe(
        switchMap(() => {
          const params = new HttpParams()
            .set('query', 'nature')
            .set('per_page', '4')
            .set('page', counter++);
          return this.http.get<IPexelsListResponse>(
            PexelsURLS.GetPhotosListByCategory,
            {
              params,
              headers,
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
}
