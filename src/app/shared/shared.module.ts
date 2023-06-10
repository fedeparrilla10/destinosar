import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from './components/element/element.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ElementComponent],
  imports: [CommonModule, RouterModule],
  exports: [ElementComponent],
})
export class SharedModule {}
