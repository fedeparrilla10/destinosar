import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './/home.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { OtherInfoComponent } from './other-info/other-info.component';
import { DevelopInfoComponent } from './develop-info/develop-info.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainInfoComponent,
    OtherInfoComponent,
    DevelopInfoComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
