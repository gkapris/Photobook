import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PexelsURLS } from './shared/constants/PexelsURLS.enum';
import { PexelsAPIKey } from './shared/constants/PhotoAPIKey';
import { IPexelsListResponse } from './shared/interfaces/IPexelsPhoto.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getPhotoList(): Observable<IPexelsListResponse> {
    const headers = new HttpHeaders({
      Authorization: PexelsAPIKey,
    });
    const params = new HttpParams()
      .set('query', 'nature')
      .set('per_page', '16');
    return this.http.get<IPexelsListResponse>(
      PexelsURLS.GetPhotosListByCategory,
      {
        params,
        headers,
      }
    );
  }
}
