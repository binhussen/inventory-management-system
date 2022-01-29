import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'app/shared/models/report.model';
import { ReportService } from 'app/shared/services/report.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.scss']
})
export class CreateReportComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private reportService: ReportService) {}

  ngOnInit(): void {}

  saveChanges(report: Report) {
    this.reportService.create(report).subscribe(
      () => {
        this.router.navigate(['/reports']);
      },
        // (error) => (this.errors = parseWebAPIErrors(error))
        (error) => (
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: JSON.stringify(error.error).toString(),
            }))
    );
  }
}

