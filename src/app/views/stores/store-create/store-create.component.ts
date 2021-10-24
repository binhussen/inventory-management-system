import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { companyWithEmployee } from "app/shared/models/companies.model";
import { employeeCreationDTO } from "app/shared/models/employees.model";
import { RequestCreate } from "app/shared/models/requests.model";
import { storeCreate } from "app/shared/models/stores.model";
import { EmployeesService } from "app/shared/services/employees.service";
import { RequestService } from "app/shared/services/requests.service";
import { StoresService } from "app/shared/services/stores.service";

@Component({
  selector: "app-store-create",
  templateUrl: "./store-create.component.html",
  styleUrls: ["./store-create.component.scss"],
})
export class StoreCreateComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private storeService: StoresService) {}

  ngOnInit(): void {}

  saveChanges(store: storeCreate) {
    this.storeService.createWithItem(store).subscribe(() => {
      this.router.navigate(["/view/stores"]);
    });
  }
}
