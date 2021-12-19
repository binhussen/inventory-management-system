import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Company, Employee } from '../../../shared/models/company.model';
import {CustomValidators} from 'ngx-custom-validators/src/app/custom-forms.module';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required]],
    country: ['', [Validators.required]],
    phoneNo: ['', [Validators.required]],
    fax: ['', [Validators.required]],
    website: ['', [Validators.required]],
    description: ['', [Validators.required]],
    employees: this.formBuilder.array([]),
  });
  @Input()
  model: Company;

  @Output()
  onSaveChanges: EventEmitter<Company> = new EventEmitter<Company>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  get employees() {
    return this.form.controls['employees'] as FormArray;
  }

  addEmployee() {
    const employees = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required]],
      department: ['', [Validators.required]],
      position: ['', [Validators.required]],
    });
    this.employees.push(employees);
  }

  deleteEmployee(Index: number) {
    this.employees.removeAt(Index);
  }
}
