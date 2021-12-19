import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Employee } from '../../../shared/models/company.model';
import { CompanyService } from '../../../shared/services/company.service';

@Component({
  selector: 'app-index-employees',
  templateUrl: './index-employees.component.html',
  styleUrls: ['./index-employees.component.scss'],
})
export class IndexEmployeesComponent implements OnInit {
  employees: Employee[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    'Name',
    'Age',
    'Email',
    'Phone',
    'Department',
    'Position',
    'Created By',
    'Created Date',
    'Modified By',
    'Modified Date',
    'Actions',
  ];
  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadData();
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

  printPage() {
    window.print();
  }
}
