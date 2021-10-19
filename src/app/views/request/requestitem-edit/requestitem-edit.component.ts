import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RequestItemDTO } from "app/shared/models/requests.model";
import { RequestService } from "app/shared/services/requests.service";

@Component({
  selector: "app-requestitem-edit",
  templateUrl: "./requestitem-edit.component.html",
  styleUrls: ["./requestitem-edit.component.scss"],
})
export class RequestitemEditComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly requestService: RequestService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  form: FormGroup;
  model: RequestItemDTO;

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      type: new FormControl("", [Validators.required]),
      quantity: new FormControl("", [Validators.required]),
      unitPrice: new FormControl("", [Validators.required]),
      use: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    });
    this.loadData();
  }

  loadData() {
    this.activatedRoute.params.subscribe((params) => {
      this.requestService
        .getItemById(params.headId, params.id)
        .subscribe((item) => {
          this.form.patchValue(item);
        });
    });
  }
  saveChanges() {
    this.activatedRoute.params.subscribe((params) => {
      this.requestService
        .editItem(params.headId, params.id, this.form.value)
        .subscribe(() => {
          this.router.navigate(["/view/request/" + params.headId]);
        });
    });
  }
}
