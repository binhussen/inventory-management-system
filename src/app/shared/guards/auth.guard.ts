import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { SecurityService } from "../services/security.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private jwtAuth: SecurityService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.jwtAuth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/sessions/signin"], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}