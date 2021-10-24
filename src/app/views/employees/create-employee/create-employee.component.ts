import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "app/shared/models/company.model";
import { employeeCreationDTO } from "app/shared/models/employees.model";
import { CompanyService } from "app/shared/services/company.service";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.scss"],
})
export class CreateEmployeeComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {}

  saveChanges(employee: Employee) {
    this.companyService.createEmp(employee).subscribe(
      () => {
        this.router.navigate(["/employees"]);
      }
      // , error => this.errors = parseWebAPIErrors(error)
    );
  }
}
