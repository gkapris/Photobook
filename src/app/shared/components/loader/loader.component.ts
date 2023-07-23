import { Component, Input } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  constructor(private readonly loaderService: LoaderService) {}

  setLoading(): boolean {
    return this.loaderService.getLoading();
  }
}
