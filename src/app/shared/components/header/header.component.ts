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

  changeButtonColor(buttonLabel: string): string {
    if (this.selectedPath == buttonLabel) {
      return 'primary';
    }
    return '';
  }
}
