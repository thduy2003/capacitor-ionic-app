import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'places',
    canActivate: [LoginGuardService],
    canActivateChild: [LoginGuardService], //add this to apply guard for all child routes of places route because loazy loaded
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
  },
  {
    path: 'bookings',
    canActivate: [LoginGuardService],
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
