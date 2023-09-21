import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderComponent } from './components/loader/loader.component';
import { RouterModule } from '@angular/router';
import { RequestErrorPopupComponent } from './components/request-error-pop-up/request-error-pop-up.component';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent, RequestErrorPopupComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule,
    MatDialogModule,
  ],
  exports: [HeaderComponent, LoaderComponent],
})
export class SharedModule {}
