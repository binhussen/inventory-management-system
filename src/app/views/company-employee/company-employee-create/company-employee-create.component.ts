import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { companyWithEmployee } from "app/shared/models/companies.model";
import { employeeCreationDTO } from "app/shared/models/employees.model";
import { CompaniesService } from "app/shared/services/companies.service";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: "app-company-employee-create",
  templateUrl: "./company-employee-create.component.html",
  styleUrls: ["./company-employee-create.component.scss"],
})
export class CompanyEmployeeCreateComponent implements OnInit {
  errors: string[] = [];

  constructor(
    private router: Router,
    private companiesService: CompaniesService
  ) {}

  ngOnInit(): void {}

  saveChanges(compwithemp: companyWithEmployee) {
    this.companiesService.createwithemployee(compwithemp).subscribe(() => {
      this.router.navigate(["/view/employees"]);
    });
  }
}
