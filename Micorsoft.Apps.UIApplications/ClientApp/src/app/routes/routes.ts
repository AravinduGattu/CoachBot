import { Routes, Route } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { MicrosoftComponent } from '../components/microsoft/microsoft.component';
import { RouteGuardService } from './route-guard.service';



export const childRoutes: Routes = [
  { path: 'microsoft', component: MicrosoftComponent, canActivate: [RouteGuardService]},
];


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: LayoutComponent,
    canActivate: [RouteGuardService],
    children: childRoutes
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
