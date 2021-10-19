import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import {
  RequestHeader,
  RequestHeaderDTO,
} from "app/shared/models/requests.model";
import { RequestService } from "app/shared/services/requests.service";

@Component({
  selector: "app-request-list",
  templateUrl: "./request-list.component.html",
  styleUrls: ["./request-list.component.scss"],
})
export class RequestListComponent implements OnInit {
  request: RequestHeader[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Asked By",
    "Checked By",
    "Approved By",
    "Date",
    "Actions",
  ];
  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.requestService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.requestService.getAll().subscribe((response) => {
      this.request = response;
    });
  }

  updatePagination(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
