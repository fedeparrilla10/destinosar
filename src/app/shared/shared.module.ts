import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './components/element/element.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ElementComponent, FilterPipe, SearchboxComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [ElementComponent, FilterPipe, SearchboxComponent],
})
export class SharedModule {}
