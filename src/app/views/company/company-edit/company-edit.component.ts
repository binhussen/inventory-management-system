import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../../../shared/models/company.model';
import { CompanyService } from '../../../shared/services/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss'],
})
export class CompanyEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {}

  model: Company;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.companyService.getById(params.id).subscribe((comapanies) => {
        this.model = comapanies;
      });
    });
  }

  saveChanges(company: Company) {
    this.activatedRoute.params.subscribe((params) => {
      this.companyService.edit(params.id, company).subscribe(() => {
        this.router.navigate(['companies']);
      },
          // (error) => (this.errors = parseWebAPIErrors(error))
          (error) => (
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: JSON.stringify(error.error).toString(),
              })));
    });
  }
}
