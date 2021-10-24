import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Employee } from "app/shared/models/company.model";
import { employeeDTO } from "app/shared/models/employees.model";
import { CompanyService } from "app/shared/services/company.service";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: "app-index-employees",
  templateUrl: "./index-employees.component.html",
  styleUrls: ["./index-employees.component.scss"],
})
export class IndexEmployeesComponent implements OnInit {
  employees: Employee[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Name",
    "Age",
    "Email",
    "Phone",
    "Department",
    "Position",
    "Actions",
  ];
  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadData();
    console.log(this.loadData);
  }

  delete(id: number) {
    this.companyService.deleteEmp(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.companyService.getAllEmp().subscribe((response) => {
      this.employees = response;
    });
  }

  updatePagination(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
