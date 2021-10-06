import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { companyDTO } from "app/shared/models/companies.model";
import { employeeDTO } from "app/shared/models/employees.model";
import { PurchaseItemDTO } from "app/shared/models/purchase-items.model";
import {
  PurchaseHeaderCreationDTO,
  PurchaseHeaderDTO,
} from "app/shared/models/purchases.model";
import { CompaniesService } from "app/shared/services/companies.service";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: "app-purchase-form",
  templateUrl: "./purchase-form.component.html",
  styleUrls: ["./purchase-form.component.scss"],
})
export class PurchaseFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private companiesService: CompaniesService,
    private employeesService: EmployeesService
  ) {}

  form: FormGroup;

  companies: companyDTO[];
  employees: employeeDTO[];

  @Input()
  model: PurchaseHeaderDTO;

  @Output()
  onSaveChanges = new EventEmitter<PurchaseHeaderCreationDTO>();

  @Input()
  nonSelectedItems: PurchaseItemDTO[] = [];

  @Input()
  selectedItems: PurchaseItemDTO[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      askedBy: "",
      checkedBy: "",
      approvedBy: "",
      date: "",
      purchaseItemsIds: "",
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }

    this.companiesService.getAll().subscribe((companies) => {
      this.companies = companies;
    });
    this.employeesService.getAll().subscribe((employees) => {
      this.employees = employees;
    });
  }
  saveChanges() {
    const purchaseItemsIds = this.selectedItems.map((value) => value.id);
    this.form.get("purchaseItemsIds").setValue(purchaseItemsIds);
    this.onSaveChanges.emit(this.form.value);
  }
}
