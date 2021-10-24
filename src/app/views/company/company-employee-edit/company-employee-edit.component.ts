import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "app/shared/models/company.model";
import { CompanyService } from "app/shared/services/company.service";

@Component({
  selector: "app-company-employee-edit",
  templateUrl: "./company-employee-edit.component.html",
  styleUrls: ["./company-employee-edit.component.scss"],
})
export class CompanyEmployeeEditComponent implements OnInit {
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly companyService: CompanyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  form: FormGroup;
  model: Employee;

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      position: new FormControl("", [Validators.required]),
      department: new FormControl("", [Validators.required]),
      phoneNo: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
    });
    this.loadData();
  }

  loadData() {
    this.activatedRoute.params.subscribe((params) => {
      this.companyService
        .getEmployeeById(params.headId, params.id)
        .subscribe((item) => {
          this.form.patchValue(item);
        });
    });
  }
  saveChanges() {
    this.activatedRoute.params.subscribe((params) => {
      this.companyService
        .editEmployee(params.headId, params.id, this.form.value)
        .subscribe(() => {
          this.router.navigate(["/company/" + params.headId]);
        });
    });
  }
}
