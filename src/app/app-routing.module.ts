import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'list',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/features/list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'place-details/:id',
    loadChildren: () =>
      import('src/app/features/place-details/place-details.module').then(
        (m) => m.PlaceDetailsModule
      ),
  },
  {
    path: 'about-us',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/features/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
