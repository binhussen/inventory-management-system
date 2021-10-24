import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { companyWithEmployee } from "app/shared/models/companies.model";
import { employeeCreationDTO } from "app/shared/models/employees.model";
import { RequestCreate } from "app/shared/models/requests.model";
import { EmployeesService } from "app/shared/services/employees.service";
import { RequestService } from "app/shared/services/requests.service";

@Component({
  selector: "app-request-create",
  templateUrl: "./request-create.component.html",
  styleUrls: ["./request-create.component.scss"],
})
export class RequestCreateComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private requestService: RequestService) {}

  ngOnInit(): void {}

  saveChanges(request: RequestCreate) {
    this.requestService.createWithItem(request).subscribe(() => {
      this.router.navigate(["/view/requests"]);
    });
  }
}
