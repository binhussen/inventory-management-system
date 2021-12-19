import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../shared/models/company.model';
import { CompanyService } from '../../../shared/services/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
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
      this.router.navigate(['/employees']);
    },
        // (error) => (this.errors = parseWebAPIErrors(error))
        (error) => (
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: JSON.stringify(error.error).toString(),
            })));
  }
}
