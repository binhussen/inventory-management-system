import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  employeeCreationDTO,
  employeeDTO,
} from "app/shared/models/employees.model";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.scss"],
})
export class EditEmployeeComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  model: employeeDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.employeesService.getById(params.id).subscribe((employees) => {
        this.model = employees;
      });
    });
  }

  saveChanges(employeeCreationDTO: employeeCreationDTO) {
    this.employeesService
      .edit(this.model.id, employeeCreationDTO)
      .subscribe(() => {
        this.router.navigate(["/view/employees"]);
      });
  }
}
