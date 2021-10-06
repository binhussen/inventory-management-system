import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { PurchaseHeaderDTO } from "app/shared/models/purchases.model";
import { PurchasesService } from "app/shared/services/purchases.service";

@Component({
  selector: "app-purchase-list",
  templateUrl: "./purchase-list.component.html",
  styleUrls: ["./purchase-list.component.scss"],
})
export class PurchaseListComponent implements OnInit {
  purchases: PurchaseHeaderDTO[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;

  columnsToDisplay = ["Asked By", "Checked By", "Approved By", "Actions"];

  constructor(private purchasesService: PurchasesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.purchasesService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.purchasesService
      .get(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<PurchaseHeaderDTO[]>) => {
        this.purchases = response.body;
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
