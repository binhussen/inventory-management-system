import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  RequestHeader,
  RequestItemDTO,
} from "app/shared/models/requests.model";
import { RequestService } from "app/shared/services/requests.service";

@Component({
  selector: "app-request-detail",
  templateUrl: "./request-detail.component.html",
  styleUrls: ["./request-detail.component.scss"],
})
export class RequestDetailComponent implements OnInit {
  request: Array<RequestItemDTO>;
  header: RequestHeader;
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Name",
    "Type",
    "Quantity",
    "Unit Price",
    "Total Price",
    "Use",
    "Description",
    "Actions",
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService
  ) {}

  paramsId;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.paramsId = params.id;
    });

    this.getDetail();
    this.getHeader();
  }

  getDetail() {
    this.requestService.getAllItem(this.paramsId).subscribe((items) => {
      this.request = items;
    });
  }

  getHeader() {
    this.requestService.getById(this.paramsId).subscribe((request) => {
      this.header = request;
    });
  }

  delete(id) {
    this.requestService.deleteItem(this.paramsId, id).subscribe(() => {
      this.getDetail();
    });
  }
}
