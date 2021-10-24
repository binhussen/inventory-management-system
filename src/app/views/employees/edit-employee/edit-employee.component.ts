import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "app/shared/models/company.model";
import {
  employeeCreationDTO,
  employeeDTO,
} from "app/shared/models/employees.model";
import { CompanyService } from "app/shared/services/company.service";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.scss"],
})
export class EditEmployeeComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {}

  model: Employee;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.companyService.getEmpById(params.id).subscribe((employees) => {
        this.model = employees;
      });
    });
  }

  saveChanges(employee: Employee) {
    this.companyService.editEmp(this.model.id, employee).subscribe(() => {
      this.router.navigate(["/employees"]);
    });
  }
}
