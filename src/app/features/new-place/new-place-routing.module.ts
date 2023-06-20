import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPlaceComponent } from './new-place.component';
import { formExitGuard } from 'src/app/core/guards/form-exit.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canDeactivate: [formExitGuard],
    component: NewPlaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPlaceRoutingModule {}
