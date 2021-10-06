import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { employeeCreationDTO } from 'app/shared/models/employees.model';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model: employeeCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<employeeCreationDTO> = new EventEmitter<employeeCreationDTO>();

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      department: new FormControl("", [Validators.required]),
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }
}
