import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { Role } from "app/shared/models/role.model";
import { user, userDTO } from "app/shared/models/security.model";
import { User } from "app/shared/models/user.model";
import { SecurityService } from "app/shared/services/security.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-user-index",
  templateUrl: "./user-index.component.html",
  styleUrls: ["./user-index.component.scss"],
})
export class UserIndexComponent implements OnInit {
  constructor(private securityService: SecurityService) {}
  users: user[];
  xrole: Array<string>;
  roles = [
    "Administrator",
    "StoreMan",
    "ProcurementManager",
    "Purchaser",
    "FinanceManager",
    "DepartmentHead",
  ];
  page: number = 1;
  pageSize: number = 10;
  totalAmountOfRecords;
  columnsToDisplay = [
    "First Name",
    "Last Name",
    "UserName",
    "Email",
    "Phone Number",
    "Status",
    "Role",
  ];

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.securityService
      .getUsers(this.page, this.pageSize)
      .subscribe((httpResponse: HttpResponse<user[]>) => {
        this.users = httpResponse.body;
        this.totalAmountOfRecords = httpResponse.headers.get(
          "totalAmountOfRecords"
        );
      });
  }

  ChangeRole(userId: string, role) {
    this.xrole = [];
    this.xrole.push(role);
    this.securityService.changeRole(userId, this.xrole).subscribe(() => {
      Swal.fire("Success", "The operation was successful", "success");
    });
  }

  ChangeStatus(userId: string, status: MatSlideToggleChange) {
    this.securityService.changeStatus(userId, status.checked).subscribe(() => {
      Swal.fire("Success", "The operation was successful", "success");
    });
  }
  updatePagination(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.LoadData();
  }
}
