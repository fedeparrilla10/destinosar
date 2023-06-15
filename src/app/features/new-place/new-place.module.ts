import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPlaceRoutingModule } from './new-place-routing.module';
import { NewPlaceComponent } from './new-place.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NewPlaceComponent],
  imports: [CommonModule, NewPlaceRoutingModule, SharedModule],
})
export class NewPlaceModule {}
