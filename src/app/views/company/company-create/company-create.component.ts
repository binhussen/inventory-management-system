import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Company } from "app/shared/models/company.model";
import { CompanyService } from "app/shared/services/company.service";

@Component({
  selector: "app-company-create",
  templateUrl: "./company-create.component.html",
  styleUrls: ["./company-create.component.scss"],
})
export class CompanyCreateComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {}

  saveChanges(company: Company) {
    this.companyService.createWithEmployee(company).subscribe(() => {
      this.router.navigate(["/companies"]);
    });
  }
}
