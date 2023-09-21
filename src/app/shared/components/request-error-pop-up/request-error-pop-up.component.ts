import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../interfaces/dialogData';

@Component({
  selector: 'request-error-pop-up',
  templateUrl: './request-error-pop-up.component.html',
  styleUrls: ['./request-error-pop-up.component.scss'],
})
export class RequestErrorPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
