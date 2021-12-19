import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../../shared/models/company.model';
import { CompanyService } from '../../../shared/services/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {}

  saveChanges(employee: Employee) {
    this.companyService.createEmp(employee).subscribe(
      () => {
        this.router.navigate(['/employees']);
      },
        // (error) => (this.errors = parseWebAPIErrors(error))
        (error) => (
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: JSON.stringify(error.error).toString(),
            }))
    );
  }
}
