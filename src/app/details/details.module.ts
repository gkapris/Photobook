import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'details/:id', component: DetailsComponent }];
@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, MatCardModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsModule {}
