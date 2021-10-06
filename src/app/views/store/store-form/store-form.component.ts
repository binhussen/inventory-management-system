import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { companyDTO } from "app/shared/models/companies.model";
import { employeeDTO } from "app/shared/models/employees.model";
import { StoreItemDTO } from "app/shared/models/store-items.model";
import {
  StoreHeaderCreationDTO,
  StoreHeaderDTO,
} from "app/shared/models/stores.model";
import { CompaniesService } from "app/shared/services/companies.service";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: "app-store-form",
  templateUrl: "./store-form.component.html",
  styleUrls: ["./store-form.component.scss"],
})
export class StoreFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private companiesService: CompaniesService,private employeesService:EmployeesService) {}

  form: FormGroup;

  companies: companyDTO[];
  employees: employeeDTO[];

  @Input()
  model: StoreHeaderDTO;

  @Output()
  onSaveChanges = new EventEmitter<StoreHeaderCreationDTO>();

  @Input()
  nonSelectedItems: StoreItemDTO[] = [];

  @Input()
  selectedItems: StoreItemDTO[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      supplierId: "",
      reciverId: "",
      date: "",
      pox: "",
      graNo: "",
      checkedBy: "",
      acceptedBy: "",
      inspectedBy: "",
      storeItemsIds: "",
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
    
    this.companiesService.getAll().subscribe(companies => {
      this.companies = companies;
    });
    this.employeesService.getAll().subscribe(employees => {
      this.employees = employees;
    });

  }
  saveChanges() {
    const storeItemsIds = this.selectedItems.map((value) => value.id);
    this.form.get("storeItemsIds").setValue(storeItemsIds);
    this.onSaveChanges.emit(this.form.value);
  }
}
