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
  date: Date = new Date();
  time = this.date.getHours();

  errors: string[] = [];

  constructor(private router: Router, private reportService: ReportService) {}

  ngOnInit(): void {}

  saveChanges(report: Report) {
    var check= this.checkTime();
    console.log(check);
    if(check){
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
  else{
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: "The Time is Passed",
  });
  }
  }
  checkTime(){
    console.log(this.time);
    if(this.time < 8 ){
      return false;
    }
    return true;
  }
}