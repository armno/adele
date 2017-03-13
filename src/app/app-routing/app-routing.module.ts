import { LoginComponent } from './../login/login.component';
import { LoginGuard } from './../login.guard';
import { ProfileComponent } from '../profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [
      LoginGuard
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
