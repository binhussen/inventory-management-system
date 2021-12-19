import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {RequestHeader} from '../../../shared/models/request.model';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss'],
})
export class RequestFormComponent implements OnInit {
  visible = false;
  form = this.formBuilder.group({
    requestItems: this.formBuilder.array([]),
  });
  @Input()
  model: RequestHeader;

  @Output()
  onSaveChanges: EventEmitter<RequestHeader> = new EventEmitter<RequestHeader>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  get requestItems() {
    return this.form.controls['requestItems'] as FormArray;
  }

  addItem() {
    const requestItems = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      unitPrice: ['', Validators.required, Validators.min(1)],
      use: ['', [Validators.required]],
      description: '',
    });
    this.requestItems.push(requestItems);
    this.visible = true;
  }

  deleteItem(Index: number) {
    this.requestItems.removeAt(Index);
    if (this.requestItems.length == 0) {
      this.visible = false;
    }
  }
}
