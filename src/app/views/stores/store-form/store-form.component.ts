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
import { storeCreate } from "app/shared/models/stores.model";
import { CustomValidators } from "ngx-custom-validators";

@Component({
  selector: "app-store-form",
  templateUrl: "./store-form.component.html",
  styleUrls: ["./store-form.component.scss"],
})
export class StoreFormComponent implements OnInit {
  form = this.formBuilder.group({
    supplierId: ["", Validators.required],
    graNo: ["", Validators.required],
    storeItems: this.formBuilder.array([]),
  });
  @Input()
  model: employeeCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<storeCreate> = new EventEmitter<storeCreate>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  get storeItems() {
    return this.form.controls["storeItems"] as FormArray;
  }

  addItem() {
    const storeItems = this.formBuilder.group({
      name: ["", Validators.required],
      itemSpecification: ["", Validators.required],
      unit: ["", Validators.required],
      qtyOrdered: ["", Validators.required],
      qtyRecived: ["", Validators.required],
      unitPrice: ["", Validators.required],
    });
    this.storeItems.push(storeItems);
  }

  deleteItem(Index: number) {
    this.storeItems.removeAt(Index);
  }
}
