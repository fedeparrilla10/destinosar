import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './/home.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';

@NgModule({
  declarations: [HomeComponent, MainInfoComponent, HomeGalleryComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
