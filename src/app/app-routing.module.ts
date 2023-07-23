import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
