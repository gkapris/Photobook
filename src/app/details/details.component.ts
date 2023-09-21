import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { IPexelsPhoto } from '../shared/interfaces/IPexelsPhoto.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  photo: Observable<IPexelsPhoto> = new Observable<IPexelsPhoto>();
  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    const photoId = Number(this.route.snapshot.paramMap.get('id'));
    this.photo = this.appService.getFavoritePhotoById(photoId);
  }

  deletePhoto(id: number) {
    this.appService.removeFavoritePhoto(id);
  }
}
