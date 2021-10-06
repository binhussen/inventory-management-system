import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { FinanceItemCreationDTO } from "app/shared/models/finance-items.model";

@Component({
  selector: "app-finance-item-form",
  templateUrl: "./finance-item-form.component.html",
  styleUrls: ["./finance-item-form.component.scss"],
})
export class FinanceItemFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Input()
  model: FinanceItemCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<FinanceItemCreationDTO> = new EventEmitter<FinanceItemCreationDTO>();

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      discription: new FormControl("", [Validators.required]),
      size: new FormControl("", [Validators.required]),
      qty: new FormControl("", [Validators.required]),
      unitPrice: new FormControl("", [Validators.required]),
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
