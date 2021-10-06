import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Role } from "app/shared/models/role.model";
import { userDTO } from "app/shared/models/security.model";
import { SecurityService } from "app/shared/services/security.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-user-index",
  templateUrl: "./user-index.component.html",
  styleUrls: ["./user-index.component.scss"],
})
export class UserIndexComponent implements OnInit {
  constructor(private securityService: SecurityService) {}

  users: userDTO[];
  role: string[];
  page: number = 1;
  pageSize: number = 10;
  totalAmountOfRecords;
  columnsToDisplay = ["Email", "Role"];
  roles = [
    "Admin",
    "Store_Man",
    "Procurer",
    "Purchaser",
    "Financier",
    "Department_Head",
  ];

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.securityService
      .getUsers(this.page, this.pageSize)
      .subscribe((httpResponse: HttpResponse<userDTO[]>) => {
        this.users = httpResponse.body;
        this.totalAmountOfRecords = httpResponse.headers.get(
          "totalAmountOfRecords"
        );
      });
  }
  makeAdmin(userId: string) {
    this.securityService.makeAdmin(userId).subscribe(() => {
      Swal.fire("Success", "The operation was successful", "success");
    });
  }

  ChangeRole(userId: string, role: string) {
    this.role = [userId, role];

    this.securityService.changeRole(this.role).subscribe(() => {
      Swal.fire("Success", "The operation was successful", "success");
    });
  }

  removeAdmin(userId: string) {
    this.securityService.removeAdmin(userId).subscribe(() => {
      Swal.fire("Success", "The operation was successful", "success");
    });
  }
  updatePagination(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.LoadData();
  }
}
