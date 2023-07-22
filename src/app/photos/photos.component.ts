import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { IPexelsListResponse } from '../shared/interfaces/IPexelsPhoto.interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photos: Observable<IPexelsListResponse> = new Observable();
  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.photos = this.appService.getPhotoList();
  }
}
