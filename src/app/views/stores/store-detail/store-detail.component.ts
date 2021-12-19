import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreHeader, StoreItem } from '../../../shared/models/store.model';
import { StoresService } from '../../../shared/services/stores.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss'],
})
export class StoreDetailComponent implements OnInit {
  Procurement = 'ProcurementManager';
  Purchaser = 'Purchaser';

  stores: StoreItem[];
  header: StoreHeader;
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    'Name',
    'Item Specification',
    'Unit',
    'Quantity Ordered',
    'Quantity Received',
     'Quantity Remain',
    'Unit Price',
    'Total Price',
      'Status',
    'Actions',
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

  printPage() {
    window.print();
  }
}
