import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { companyCreationDTO } from 'app/shared/models/companies.model';
import { CompaniesService } from 'app/shared/services/companies.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit {

  errors: string[] = [];

  constructor(private router: Router, private companiesService: CompaniesService) { }

  ngOnInit(): void {

  }

  saveChanges(companyCreationDTO: companyCreationDTO){
    this.companiesService.create(companyCreationDTO).subscribe(() => {
      this.router.navigate(['/view/companies']);}
      // , error => this.errors = parseWebAPIErrors(error)
    );

  }
}