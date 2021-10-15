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
  selector: "app-request-form",
  templateUrl: "./request-form.component.html",
  styleUrls: ["./request-form.component.scss"],
})
export class RequestFormComponent implements OnInit {
  form = this.formBuilder.group({
    requestItems: this.formBuilder.array([]),
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
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  get requestItems() {
    return this.form.controls["requestItems"] as FormArray;
  }

  addItem() {
    const requestItems = this.formBuilder.group({
      name: ["", Validators.required],
      type: ["", Validators.required],
      use: ["", Validators.required],
      quantity: ["", Validators.required],
      unitPrice: ["", Validators.required],
      budgetCode: ["", Validators.required],
      description: ["", Validators.required],
    });
    this.requestItems.push(requestItems);
  }

  deleteItem(Index: number) {
    this.requestItems.removeAt(Index);
  }
}
