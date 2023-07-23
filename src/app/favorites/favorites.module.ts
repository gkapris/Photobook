import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'favorites', component: FavoritesComponent }];

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, MatCardModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesModule {}
