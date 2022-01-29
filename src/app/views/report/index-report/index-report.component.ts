import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Report } from 'app/shared/models/report.model';
import { ReportService } from 'app/shared/services/report.service';

@Component({
  selector: 'app-index-report',
  templateUrl: './index-report.component.html',
  styleUrls: ['./index-report.component.scss']
})
export class IndexReportComponent implements OnInit {
  now: Date = new Date();
  edit=true;

  ReportCreater = 'ReportCreater';
  reports: Report[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    'Book Owner',
    'Branch',
    'Memeber Phone',
    'Book Number',
    'Service',
    'Created By',
    'Created Date',
    'Modified By',
    'Modified Date',
    'Actions',
  ];
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.reportService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.reportService.getAll().subscribe((response) => {
      this.reports = response;
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

  checkTime(){
    console.log(this.now.getHours());
    if((this.now.getHours()>=18) ||(this.now.getHours()<8)){
      return false;
    }
    return true;
  }
}
