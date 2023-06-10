import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceDetailsComponent } from './place-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PlaceDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceDetailsRoutingModule {}
