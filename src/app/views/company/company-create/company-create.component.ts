import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../../shared/models/company.model';
import { CompanyService } from '../../../shared/services/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss'],
})
export class CompanyCreateComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {}

  saveChanges(company: Company) {
    this.companyService.createWithEmployee(company).subscribe(() => {
      this.router.navigate(['/companies']);
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
