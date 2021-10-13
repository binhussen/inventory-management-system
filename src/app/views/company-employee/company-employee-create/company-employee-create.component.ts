import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employeeCreationDTO } from 'app/shared/models/employees.model';
import { EmployeesService } from 'app/shared/services/employees.service';

@Component({
  selector: 'app-company-employee-create',
  templateUrl: './company-employee-create.component.html',
  styleUrls: ['./company-employee-create.component.scss']
})
export class CompanyEmployeeCreateComponent implements OnInit {

  errors: string[] = [];

  constructor(
    private router: Router,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {}

  saveChanges(employeeCreationDTO: employeeCreationDTO) {
    this.employeesService.create(employeeCreationDTO).subscribe(
      () => {
        this.router.navigate(["/view/employees"]);
      }
      // , error => this.errors = parseWebAPIErrors(error)
    );
  }
}
