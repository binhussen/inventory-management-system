import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { PurchaseItemDTO } from "app/shared/models/purchase-items.model";
import { PurchaseItemsService } from "app/shared/services/purchase-items.service";

@Component({
  selector: "app-purchase-item-index",
  templateUrl: "./purchase-item-index.component.html",
  styleUrls: ["./purchase-item-index.component.scss"],
})
export class PurchaseItemIndexComponent implements OnInit {
  purchaseItems: PurchaseItemDTO[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Name",
    "Type",
    "Dicription",
    "Use",
    "Qty",
    "UnitPrice",
    "TotalPrice",
    "BudgetCode",
    "Actions",
  ];
  constructor(private purchaseItemsService: PurchaseItemsService) {}

  ngOnInit(): void {
    this.loadData();
    console.log(this.loadData);
  }

  delete(id: number) {
    this.purchaseItemsService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.purchaseItemsService
      .get(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<PurchaseItemDTO[]>) => {
        this.purchaseItems = response.body;
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
