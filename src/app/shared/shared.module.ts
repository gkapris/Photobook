import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
<<<<<<< Updated upstream

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatButtonModule, FlexLayoutModule],
  exports: [HeaderComponent],
=======
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent],
  imports: [CommonModule, MatButtonModule, FlexLayoutModule],
  exports: [HeaderComponent, LoaderComponent],
>>>>>>> Stashed changes
})
export class SharedModule {}
