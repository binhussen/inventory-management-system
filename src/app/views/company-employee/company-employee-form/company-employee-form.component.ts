import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { companyWithEmployee } from "app/shared/models/companies.model";
import {
  employeeCreationDTO,
  employeeDTO,
} from "app/shared/models/employees.model";
import { CustomValidators } from "ngx-custom-validators";

@Component({
  selector: "app-company-employee-form",
  templateUrl: "./company-employee-form.component.html",
  styleUrls: ["./company-employee-form.component.scss"],
})
export class CompanyEmployeeFormComponent implements OnInit {
  try = "Names";
  columnsToDisplay = [
    "Name",
    "Age",
    "Email",
    "Phone",
    "Department",
    "Position",
    "Action",
  ];
  form = this.formBuilder.group({
    name: new FormControl("", [Validators.required]),
    phoneNo: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    fax: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    website: new FormControl("", [CustomValidators.url, Validators.required]),
    description: new FormControl("", [Validators.required]),
    employees: this.formBuilder.array([]),
  });
  @Input()
  model: employeeCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<companyWithEmployee> = new EventEmitter<companyWithEmployee>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }

    console.log(this.employees.value);
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  get employees() {
    return this.form.controls["employees"] as FormArray;
  }

  addEmployee() {
    const employeeForm = this.formBuilder.group({
      name: ["", Validators.required],
      age: ["", Validators.required],
      email: ["", Validators.required],
      phoneNo: ["", Validators.required],
      department: ["", Validators.required],
      position: ["", Validators.required],
    });
    this.employees.push(employeeForm);
  }

  deleteEmployee(Index: number) {
    this.employees.removeAt(Index);
  }
}
