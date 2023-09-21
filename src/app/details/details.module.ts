import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: 'details/:id', component: DetailsComponent }];
@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DetailsModule {}
