import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPlaceRoutingModule } from './edit-place-routing.module';
import { EditPlaceComponent } from './edit-place.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditPlaceComponent],
  imports: [CommonModule, EditPlaceRoutingModule, SharedModule],
})
export class EditPlaceModule {}
