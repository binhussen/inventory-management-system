import { HttpResponse } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { companyDTO } from "app/shared/models/companies.model";
import { CompaniesService } from "app/shared/services/companies.service";
import { TablesService } from "app/views/tables/tables.service";

@Component({
  selector: "app-index-companies",
  templateUrl: "./index-companies.component.html",
  styleUrls: ["./index-companies.component.scss"],
})
export class IndexCompaniesComponent implements OnInit {
  companies: companyDTO[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Name",
    "Phone",
    "Email",
    "Fax",
    "City",
    "Address",
    "Website",
    "Discribtion",
    "Actions",
  ];
  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.companiesService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.companiesService
      .get(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<companyDTO[]>) => {
        this.companies = response.body;
        this.totalAmountOfRecords = response.headers.get(
          "totalAmountOfRecords"
        );
      });
  }

  updatePagination(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
