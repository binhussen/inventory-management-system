import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { StoreItemCreationDTO } from "app/shared/models/store-items.model";

@Component({
  selector: "app-store-item-form",
  templateUrl: "./store-item-form.component.html",
  styleUrls: ["./store-item-form.component.scss"],
})
export class StoreItemFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Input()
  model: StoreItemCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<StoreItemCreationDTO> = new EventEmitter<StoreItemCreationDTO>();

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      itemSpecification: new FormControl("", [Validators.required]),
      unit: new FormControl("", [Validators.required]),
      qtyOrdered: new FormControl("", [Validators.required]),
      qtyRecived: new FormControl("", [Validators.required]),
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
