import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent],
  imports: [CommonModule, MatButtonModule, FlexLayoutModule],
  exports: [HeaderComponent, LoaderComponent],
})
export class SharedModule {}
