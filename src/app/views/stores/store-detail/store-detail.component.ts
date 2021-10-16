import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StoreHeaderDTO, StoreItems } from "app/shared/models/stores.model";
import { StoreItemsService } from "app/shared/services/store-items.service";
import { StoresService } from "app/shared/services/stores.service";

@Component({
  selector: "app-store-detail",
  templateUrl: "./store-detail.component.html",
  styleUrls: ["./store-detail.component.scss"],
})
export class StoreDetailComponent implements OnInit {
  stores: Array<StoreItems>;
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
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private storeItemsService: StoreItemsService,
    private storeService: StoresService
  ) {}

  ngOnInit(): void {
    this.getDetail();
    this.getHeader();
  }

  getDetail() {
    this.activatedRoute.params.subscribe((params) => {
      this.storeItemsService.getAll(params.id).subscribe((storeItems) => {
        this.stores = storeItems;
      });
    });
  }

  getHeader() {
    this.activatedRoute.params.subscribe((params) => {
      this.storeService.getById(params.id).subscribe((store) => {
        this.header = store;
        console.log(store);
      });
    });
  }
}
