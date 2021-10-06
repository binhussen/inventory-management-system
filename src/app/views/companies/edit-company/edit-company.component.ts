import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { companyCreationDTO, companyDTO } from 'app/shared/models/companies.model';
import { CompaniesService } from 'app/shared/services/companies.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private companiesService: CompaniesService,
    private router: Router) { }

  model: companyDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.companiesService.getById(params.id).subscribe(companys => {
        this.model = companys;
      })
    });
  }

  saveChanges(companyCreationDTO: companyCreationDTO){
    this.companiesService.edit(this.model.id, companyCreationDTO)
    .subscribe(() => {
      this.router.navigate(["/view/companies"]);
    });
  }

}