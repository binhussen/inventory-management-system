import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { userCredentials } from "app/shared/models/security.model";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  action: string = "Register";

  roles = [
    "Admin",
    "Store_Man",
    "Procurer",
    "Purchaser",
    "Financier",
    "Department_Head",
  ];
  @Output()
  onSubmit = new EventEmitter<userCredentials>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        "",
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      password: [
        "",
        {
          validators: [Validators.required],
        },
      ],
      role: [""],
    });
  }

  getEmailErrorMessage() {
    var field = this.form.get("email");
    if (field.hasError("required")) {
      return "The email field is required";
    }

    if (field.hasError("email")) {
      return "The email is invalid";
    }

    return "";
  }
}
