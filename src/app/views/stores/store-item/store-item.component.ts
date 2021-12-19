import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreItem } from '../../../shared/models/store.model';
import { StoresService } from '../../../shared/services/stores.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
})
export class StoreItemComponent implements OnInit {
  stores: StoreItem[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    'Name',
    'Item Specification',
    'Unit',
    'Quantity',
    'Unit Price',
    'Total Price',
  ];
  constructor(private storeService: StoresService) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.storeService.getallList().subscribe((items) => {
      items.map((x) => {
        if (x.qtyRemain > 0 && x.status==0) {
          if (this.stores == undefined) this.stores = [];
          this.stores.push(x);
          return x;
        }
      });
    });
  }
  printPage() {
    window.print();
  }
}
