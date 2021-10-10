import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { companyCreationDTO } from 'app/shared/models/companies.model';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.scss']
})
export class FormCompanyComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model: companyCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<companyCreationDTO> = new EventEmitter<companyCreationDTO>();

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      phoneNo: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      fax: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
      website: new FormControl("", [CustomValidators.url,Validators.required]),
      description: new FormControl("", [Validators.required]),
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }
}
