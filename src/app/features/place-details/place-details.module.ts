import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceDetailsRoutingModule } from './place-details-routing.module';
import { PlaceDetailsComponent } from './place-details.component';

@NgModule({
  declarations: [PlaceDetailsComponent],
  imports: [CommonModule, PlaceDetailsRoutingModule],
})
export class PlaceDetailsModule {}
