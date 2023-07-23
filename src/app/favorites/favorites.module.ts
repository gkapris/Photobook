import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, MatCardModule],
  exports: [FavoritesComponent],
})
export class FavoritesModule {}
