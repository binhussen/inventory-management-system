import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import {
  employeeCreationDTO,
  employeeDTO,
} from "app/shared/models/employees.model";

@Component({
  selector: "app-company-employee-form",
  templateUrl: "./company-employee-form.component.html",
  styleUrls: ["./company-employee-form.component.scss"],
})
export class CompanyEmployeeFormComponent implements OnInit {
  columnsToDisplay = [
    "Name",
    "Age",
    "Email",
    "Phone",
    "Department",
    "Position",
    "Action",
  ];
  employees: MatTableDataSource<employeeDTO>;
  @Input()
  model: employeeCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<employeeCreationDTO> = new EventEmitter<employeeCreationDTO>();

  constructor(private formBuilder: FormBuilder) {
    const employeeDTO: employeeDTO[] = [];
    this.employees = new MatTableDataSource(employeeDTO);

    this.form = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      phoneNo: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      position: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      department: new FormControl(null, [Validators.required]),
    });
  }

  onAdd() {
    this.employees.data.push({
      id: this.form.value.name,
      name: this.form.value.name,
      age: this.form.value.age,
      email: this.form.value.email,
      phoneNo: this.form.value.phoneNo,
      department: this.form.value.department,
      position: this.form.value.position,
    });

    this.employees.filter = "";
  }

  onRemove(index: number) {
    this.employees.data.splice(index, 1);
    this.employees.filter = "";
  }
  ngOnInit() {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
