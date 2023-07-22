import { Component } from '@angular/core';
import { ButtonLabels } from '../../constants/ButtonLabels';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  ButtonLabels = ButtonLabels;
  selectedPath: string = '';
  // selectedPath: string = ButtonLabels.FAVORITES;
  // selectedPath: string = ButtonLabels.PHOTOS;

  changeButtonColor(buttonLabel: string): string {
    if (this.selectedPath == buttonLabel) {
      return 'primary';
    }
    return '';
  }
}
