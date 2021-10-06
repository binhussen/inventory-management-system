import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { userCredentials } from "app/shared/models/security.model";
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

  register(userCredentials: userCredentials) {
    this.errors = [];
    this.securityService
      .register(userCredentials)
      .subscribe((authenticationResponse) => {
        this.router.navigate(["/view/users"]);
      });
    // , error => this.errors = parseWebAPIErrors(error));
  }
}
