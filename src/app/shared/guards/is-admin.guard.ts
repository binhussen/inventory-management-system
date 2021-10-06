import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { SecurityService } from "../services/security.service";

@Injectable({
  providedIn: "root",
})
export class IsAdminGuard implements CanActivate {
  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.securityService.getRole() === "Admin") {
      return true;
    }
    // if (this.securityService.getRole() === "Store_Man") {
    //   return true;
    // }if (this.securityService.getRole() === "Procurer") {
    //   return true;
    // }if (this.securityService.getRole() === "Purchaser") {
    //   return true;
    // }if (this.securityService.getRole() === "Financier") {
    //   return true;
    // }if (this.securityService.getRole() === "Department_Head") {
    //   return true;
    // }

    this.router.navigate(["/login"]);
    return false;
  }
}
