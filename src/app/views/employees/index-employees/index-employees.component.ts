import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { employeeDTO } from 'app/shared/models/employees.model';
import { EmployeesService } from 'app/shared/services/employees.service';

@Component({
  selector: 'app-index-employees',
  templateUrl: './index-employees.component.html',
  styleUrls: ['./index-employees.component.scss']
})
export class IndexEmployeesComponent implements OnInit {

  employees: employeeDTO[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = ['Name','Age','Email','Phone','Department','Position','Actions'];
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
  this.loadData();
  console.log(this.loadData);
  }

  delete(id: number){
    this.employeesService.delete(id)
    .subscribe(() => {
      this.loadData();
    });
  }

loadData(){
  this.employeesService.get(this.currentPage, this.pageSize).subscribe((response: HttpResponse<employeeDTO[]>) => {
    this.employees = response.body;
    this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
  });
}

updatePagination(event: PageEvent){
  this.currentPage = event.pageIndex + 1;
  this.pageSize = event.pageSize;
  this.loadData();
}

}