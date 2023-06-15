import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPlaceComponent } from './edit-place.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: EditPlaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPlaceRoutingModule {}
