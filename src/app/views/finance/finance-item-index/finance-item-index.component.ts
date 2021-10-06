import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { FinanceItemDTO } from "app/shared/models/finance-items.model";
import { FinanceItemsService } from "app/shared/services/finance-items.service";

@Component({
  selector: "app-finance-item-index",
  templateUrl: "./finance-item-index.component.html",
  styleUrls: ["./finance-item-index.component.scss"],
})
export class FinanceItemIndexComponent implements OnInit {
  financeItems: FinanceItemDTO[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Name",
    "Discription",
    "Size",
    "Qty",
    "UnitPrice",
    "TotalPrice",
    "Actions",
  ];
  constructor(private financeItemsService: FinanceItemsService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.financeItemsService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.financeItemsService
      .get(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<FinanceItemDTO[]>) => {
        this.financeItems = response.body;
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
