import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { user, userCredentials } from "app/shared/models/security.model";
import { SecurityService } from "app/shared/services/security.service";

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.scss"],
})
export class UserRegisterComponent implements OnInit {
  constructor(
    private securityService: SecurityService,
    private router: Router
  ) {}

  errors: string[] = [];

  ngOnInit(): void {}

  register(user: user) {
    this.errors = [];
    this.securityService.register(user).subscribe((authenticationResponse) => {
      this.router.navigate(["/users"]);
    });
    // , error => this.errors = parseWebAPIErrors(error));
  }
}
