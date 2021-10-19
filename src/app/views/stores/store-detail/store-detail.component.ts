import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreHeaderDTO, storeItem } from "app/shared/models/stores.model";
import { StoreItemsService } from "app/shared/services/store-items.service";
import { StoresService } from "app/shared/services/stores.service";

@Component({
  selector: "app-store-detail",
  templateUrl: "./store-detail.component.html",
  styleUrls: ["./store-detail.component.scss"],
})
export class StoreDetailComponent implements OnInit {
  stores: storeItem[];
  header: StoreHeaderDTO;
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    "Name",
    "Item Specification",
    "Unit",
    "Quantity Ordered",
    "Quantity Received",
    "Unit Price",
    "Total Price",
    "Actions",
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private storeService: StoresService
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
    this.storeService.getAllItem(this.paramsId).subscribe((items) => {
      this.stores = items;
    });
  }

  getHeader() {
    this.storeService.getById(this.paramsId).subscribe((store) => {
      this.header = store;
    });
  }

  delete(id) {
    this.storeService.deleteItem(this.paramsId, id).subscribe(() => {
      this.getDetail();
    });
  }
}
