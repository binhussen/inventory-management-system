import { Component, Input, OnInit } from "@angular/core";
import { SecurityService } from "app/shared/services/security.service";

@Component({
  selector: "app-authorize-view",
  templateUrl: "./authorize-view.component.html",
  styleUrls: ["./authorize-view.component.scss"],
})
export class AuthorizeViewComponent implements OnInit {
  constructor(private securityService: SecurityService) {}

  ngOnInit(): void {}

  @Input()
  role: string[];

  public isAuthorized() {
    if (this.role) {
      for (var key in this.role) {
        if (this.securityService.getRole() === this.role[key]) return true;
      }
      return false;
    } else {
      return this.securityService.isAuthenticated();
    }
  }
}
