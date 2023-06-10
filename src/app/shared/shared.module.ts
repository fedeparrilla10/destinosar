import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './components/element/element.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter/filter.pipe';

@NgModule({
  declarations: [ElementComponent, FilterPipe],
  imports: [CommonModule, RouterModule],
  exports: [ElementComponent],
})
export class SharedModule {}
