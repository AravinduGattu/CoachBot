import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    return true;
  }
}
