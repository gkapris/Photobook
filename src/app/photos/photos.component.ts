import { Observable } from 'rxjs';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';
import { IPexelsPhoto } from '../shared/interfaces/IPexelsPhoto.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photos: Observable<IPexelsPhoto[]> = new Observable<IPexelsPhoto[]>();
  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.appService.getPhotoList();
    this.photos = this.appService.photosList$.asObservable();
  }

  // addImageToFavorites(id: number) {
  //   console.log(id);
  // }
}
