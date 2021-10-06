import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { StoreHeaderDTO } from "app/shared/models/stores.model";
import { StoresService } from "app/shared/services/stores.service";

@Component({
  selector: "app-store-list",
  templateUrl: "./store-list.component.html",
  styleUrls: ["./store-list.component.scss"],
})
export class StoreListComponent implements OnInit {
  role: string[] = ["Store_Man"];
  stores: StoreHeaderDTO[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;

  columnsToDisplay = [
    "Supplier",
    "Reciver",
    "GraNo",
    "Pox",
    "CheckedBy",
    "AcceptedBy",
    "InspectedBy",
    "Date",
    "Actions",
  ];

  constructor(private storesService: StoresService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.storesService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.storesService
      .get(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<StoreHeaderDTO[]>) => {
        this.stores = response.body;
        this.totalAmountOfRecords = response.headers.get(
          "totalAmountOfRecords"
        );
      });
  }

  updatePagination(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
