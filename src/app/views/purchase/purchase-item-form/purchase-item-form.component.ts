import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { PurchaseItemCreationDTO } from "app/shared/models/purchase-items.model";

@Component({
  selector: "app-purchase-item-form",
  templateUrl: "./purchase-item-form.component.html",
  styleUrls: ["./purchase-item-form.component.scss"],
})
export class PurchaseItemFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Input()
  model: PurchaseItemCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<PurchaseItemCreationDTO> = new EventEmitter<PurchaseItemCreationDTO>();

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      type: new FormControl("", [Validators.required]),
      dicription: new FormControl("", [Validators.required]),
      use: new FormControl("", [Validators.required]),
      qty: new FormControl("", [Validators.required]),
      unitPrice: new FormControl("", [Validators.required]),
      budgetCode: new FormControl("", [Validators.required]),
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
