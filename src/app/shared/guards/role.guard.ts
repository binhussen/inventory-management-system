import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SecurityService} from '../services/security.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router, private jwtAuth: SecurityService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const roles = route.data.roles as Array<string>;

    const check = (role) => role == this.jwtAuth.getRole();
    const authorize = roles.some(check);

    if (authorize) {
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Not Allowed to This Route!',
      });
      return false;
    }
  }
}
