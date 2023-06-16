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
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/features/place-details/place-details.module').then(
        (m) => m.PlaceDetailsModule
      ),
  },
  {
    path: 'new-place',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/features/new-place/new-place.module').then(
        (m) => m.NewPlaceModule
      ),
  },
  {
    path: 'edit-place/:id',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/features/edit-place/edit-place.module').then(
        (m) => m.EditPlaceModule
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
  {
    path: 'user-list',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/features/user-list/user-list.module').then(
        (m) => m.UserListModule
      ),
  },
  {
    path: '**',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('src/app/features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
