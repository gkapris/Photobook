import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
