import { Component, OnInit, AfterViewInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { CustomValidators } from "ngx-custom-validators";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { JwtAuthService } from "app/shared/services/auth/jwt-auth.service";
import { AppLoaderService } from "app/shared/services/app-loader/app-loader.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { userCredentials } from "app/shared/models/security.model";
import { SecurityService } from "app/shared/services/security.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
  animations: matxAnimations,
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMsg = "";
  return: string;
  loading: Boolean;

  constructor(
    private router: Router,
    private securityService: SecurityService
  ) {}

  form: FormGroup;

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", Validators.required),
      // rememberMe: new FormControl(true),
    });
  }

  signin() {
    const signinData = this.signinForm.value;
    this.securityService.login(signinData).subscribe(
      (authenticationResponse) => {
        this.securityService.saveToken(authenticationResponse);
        this.router.navigate(["/"]);
      }
      // (error) => (this.errors = parseWebAPIErrors(error))
    );
  }
}
