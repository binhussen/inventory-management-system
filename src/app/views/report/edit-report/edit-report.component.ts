import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'app/shared/models/report.model';
import { ReportService } from 'app/shared/services/report.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-report',
  templateUrl: './edit-report.component.html',
  styleUrls: ['./edit-report.component.scss']
})
export class EditReportComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private reportServie: ReportService,
    private router: Router
  ) {}

  model: Report;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.reportServie.getById(params.id).subscribe((reports) => {
        this.model = reports;
      });
    });
  }

  saveChanges(report: Report) {
    this.reportServie.edit(this.model.id, report).subscribe(() => {
      this.router.navigate(['/reports']);
    },
        // (error) => (this.errors = parseWebAPIErrors(error))
        (error) => (
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: JSON.stringify(error.error).toString(),
            })));
  }
}
