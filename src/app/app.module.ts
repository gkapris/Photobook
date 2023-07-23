import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PhotosComponent } from './photos/photos.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';

import { MatCardModule } from '@angular/material/card';
import { FavoritesModule } from './favorites/favorites.module';

@NgModule({
  declarations: [AppComponent, PhotosComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FavoritesModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
