import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { StoreItemDTO } from "app/shared/models/store-items.model";
import { StoreItemsService } from "app/shared/services/store-items.service";

@Component({
  selector: "app-store-item-index",
  templateUrl: "./store-item-index.component.html",
  styleUrls: ["./store-item-index.component.scss"],
})
export class StoreItemIndexComponent implements OnInit {
  role: string[] = ["Store_Man"];
  storeItems: StoreItemDTO[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Name",
    "ItemSpecification",
    "Unit",
    "QtyOrdered",
    "QtyRecived",
    "UnitPrice",
    "TotalPrice",
    "Actions",
  ];
  constructor(private storeItemsService: StoreItemsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.storeItemsService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.storeItemsService
      .get(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<StoreItemDTO[]>) => {
        this.storeItems = response.body;
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
