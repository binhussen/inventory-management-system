import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { FinanceHeaderDTO } from "app/shared/models/finances.model";
import { FinancesService } from "app/shared/services/finances.service";

@Component({
  selector: "app-finance-list",
  templateUrl: "./finance-list.component.html",
  styleUrls: ["./finance-list.component.scss"],
})
export class FinanceListComponent implements OnInit {
  finances: FinanceHeaderDTO[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;

  columnsToDisplay = [
    "Vendor",
    "Ship To",
    "Terms of Payment",
    "Terms Of Deliery",
    "Prepared By",
    "Checked By",
    "Approved By",
    "Actions",
  ];

  constructor(private financesService: FinancesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.financesService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.financesService
      .get(this.currentPage, this.pageSize)
      .subscribe((response: HttpResponse<FinanceHeaderDTO[]>) => {
        this.finances = response.body;
        console.log(this.finances);
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
