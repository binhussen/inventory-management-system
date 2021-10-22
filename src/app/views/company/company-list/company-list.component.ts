import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Company } from "app/shared/models/company.model";
import { CompanyService } from "app/shared/services/company.service";

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
})
export class CompanyListComponent implements OnInit {
  company: Company[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Name",
    "Phone Number",
    "Email",
    "Website",
    "Address",
    "Actions",
  ];
  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.companyService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.companyService.getAll().subscribe((response) => {
      this.company = response;
    });
  }

  updatePagination(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
