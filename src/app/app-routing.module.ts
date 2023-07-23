import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./favorites/favorites.module').then((m) => m.FavoritesModule),
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
