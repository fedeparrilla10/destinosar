import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './components/element/element.component';
import { RouterModule } from '@angular/router';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { PlacesFormComponent } from './components/places-form/places-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterNamePipe } from './pipes/filter/filter-name.pipe';
import { FilterProvincePipe } from './pipes/filter/filter-province.pipe';

@NgModule({
  declarations: [
    ElementComponent,
    SearchboxComponent,
    PlacesFormComponent,
    FilterNamePipe,
    FilterProvincePipe,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    ElementComponent,
    SearchboxComponent,
    PlacesFormComponent,
    FilterNamePipe,
    FilterProvincePipe,
  ],
})
export class SharedModule {}
