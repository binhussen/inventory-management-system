import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { user, userCredentials } from "app/shared/models/security.model";

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
    "Administrator",
    "StoreMan",
    "ProcurementManager",
    "Purchaser",
    "FinanceManager",
    "DepartmentHead",
  ];
  @Output()
  onSubmit = new EventEmitter<user>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      userName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required]],
      roles: this.formBuilder.array([]),
    });
  }

  get getRole() {
    return this.form.controls["roles"] as FormArray;
  }
  // function which pushed new value to collections array
  addRole(val) {
    const roles = this.form.get("roles");
    if (!roles.value.includes(val)) {
      this.getRole.clear();
      this.getRole.push(this.formBuilder.control(val));
    }
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
