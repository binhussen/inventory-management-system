import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Report } from 'app/shared/models/report.model';

@Component({
  selector: 'app-form-report',
  templateUrl: './form-report.component.html',
  styleUrls: ['./form-report.component.scss']
})
export class FormReportComponent implements OnInit {

  services=[
    'Normal Saving',
    'Home Car Saving',
    'Home Saving',
    'Car Saving',
    'Loan Close',
    'Turn to Share',
    'Lost Book',
    'Lejar',
    'Interest',
    'Wisdrowal',
    'Member Out'
  ];

  constructor(private formBuilder: FormBuilder) {}

  @Input()
  model: Report;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<Report> = new EventEmitter<Report>();
  ngOnInit() {
    this.form = this.formBuilder.group({
      bookOwner: new FormControl('', [Validators.required]),
      branch: new FormControl('', [Validators.required]),
      memeberPhone: new FormControl('', [Validators.required]),
      bookNumber: new FormControl('', [Validators.required]),
      service: new FormControl('', [Validators.required]),
    });
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
