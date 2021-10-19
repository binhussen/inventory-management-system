import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { storeItem, storeItemDto } from "app/shared/models/stores.model";
import { StoresService } from "app/shared/services/stores.service";

@Component({
  selector: "app-storeitem-edit",
  templateUrl: "./storeitem-edit.component.html",
  styleUrls: ["./storeitem-edit.component.scss"],
})
export class StoreitemEditComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly storeService: StoresService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  form: FormGroup;
  model: storeItem;

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      itemSpecification: new FormControl("", [Validators.required]),
      unit: new FormControl("", [Validators.required]),
      qtyOrdered: new FormControl("", [Validators.required]),
      qtyRecived: new FormControl("", [Validators.required]),
      unitPrice: new FormControl("", [Validators.required]),
    });
    this.loadData();
  }

  loadData() {
    this.activatedRoute.params.subscribe((params) => {
      this.storeService
        .getItemById(params.headId, params.id)
        .subscribe((item) => {
          this.form.patchValue(item);
        });
    });
  }
  saveChanges() {
    this.activatedRoute.params.subscribe((params) => {
      this.storeService
        .editItem(params.headId, params.id, this.form.value)
        .subscribe(() => {
          this.router.navigate(["/view/store/" + params.headId]);
        });
    });
  }
}
