import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent },
  { path: 'favorites', component: FavoritesComponent },
  // {
  //   path: 'favorites',
  //   loadChildren: () =>
  //     import('./favorites/favorites.module').then((m) => m.FavoritesModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
