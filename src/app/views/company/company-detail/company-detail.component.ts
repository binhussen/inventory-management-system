import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Company, Employee } from "app/shared/models/company.model";
import { CompanyService } from "app/shared/services/company.service";

@Component({
  selector: "app-company-detail",
  templateUrl: "./company-detail.component.html",
  styleUrls: ["./company-detail.component.scss"],
})
export class CompanyDetailComponent implements OnInit {
  employees: Employee[];
  header: Company;
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Name",
    "Age",
    "Email",
    "Phone No",
    "Position",
    "Department",
    "Actions",
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  paramsId;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.paramsId = params.id;
    });

    this.getDetail();
    this.getHeader();
  }

  getDetail() {
    this.companyService.getAllEmployee(this.paramsId).subscribe((employees) => {
      this.employees = employees;
    });
  }

  getHeader() {
    this.companyService.getById(this.paramsId).subscribe((employee) => {
      this.header = employee;
    });
  }

  delete(id) {
    this.companyService.deleteEmployee(this.paramsId, id).subscribe(() => {
      this.getDetail();
    });
  }
}
