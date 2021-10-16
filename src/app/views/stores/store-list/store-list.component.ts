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
  stores: StoreHeaderDTO[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Supplier",
    "Receiver",
    "Gra No",
    "Checked By",
    "Date",
    "Actions",
  ];
  constructor(private StoreService: StoresService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.StoreService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.StoreService.getAll().subscribe((response) => {
      this.stores = response;
    });
  }

  updatePagination(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
