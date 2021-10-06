import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { companyDTO } from "app/shared/models/companies.model";
import { employeeDTO } from "app/shared/models/employees.model";
import { FinanceItemDTO } from "app/shared/models/finance-items.model";
import {
  FinanceHeaderCreationDTO,
  FinanceHeaderDTO,
} from "app/shared/models/finances.model";
import { CompaniesService } from "app/shared/services/companies.service";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: "app-finance-form",
  templateUrl: "./finance-form.component.html",
  styleUrls: ["./finance-form.component.scss"],
})
export class FinanceFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private companiesService: CompaniesService,
    private employeesService: EmployeesService
  ) {}

  form: FormGroup;

  companies: companyDTO[];
  employees: employeeDTO[];

  @Input()
  model: FinanceHeaderDTO;

  @Output()
  onSaveChanges = new EventEmitter<FinanceHeaderCreationDTO>();

  @Input()
  nonSelectedItems: FinanceItemDTO[] = [];

  @Input()
  selectedItems: FinanceItemDTO[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      vendorId: "",
      shipId: "",
      termsofPayment: "",
      termsOfDeliery: "",
      preparedBy: "",
      checkedBy: "",
      approvedBy: "",
      financeItemsIds: "",
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
    const financeItemsIds = this.selectedItems.map((value) => value.id);
    this.form.get("financeItemsIds").setValue(financeItemsIds);
    this.onSaveChanges.emit(this.form.value);
  }
}
