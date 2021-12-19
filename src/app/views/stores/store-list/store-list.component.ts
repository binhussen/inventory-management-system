import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { StoreHeader } from '../../../shared/models/store.model';
import { StoresService } from '../../../shared/services/stores.service';
import {SecurityService} from '../../../shared/services/security.service';
import Swal from 'sweetalert2';
import {CompanyService} from '../../../shared/services/company.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],
})
export class StoreListComponent implements OnInit {
  Purchaser = 'Purchaser';
  Procurement = 'ProcurementManager';
  StoreMan = 'StoreMan';

  stores: StoreHeader[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    'Supplier',
    'Gra No',
    'Receiver',
    'Received Date',
    'Store By',
    'Store Date',
      'Modified By',
      'Modified Date',
    'Status',
    'Actions',
  ];
  constructor(private storeService: StoresService, private securityService: SecurityService, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.storeService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.storeService.getAll().subscribe((response) => {
      response.map((x) => {
        return this.companyService.getById(x.supplierId).subscribe((c) => {
          x.supplierId = c.name;
        });
      });
      this.stores = response;
    });
  }

  updatePagination(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  showColumn(): string {
    return this.securityService.getRole()== this.Procurement ? null : 'hidden-row';
  }
  showStatus(): string {
    return (this.securityService.getRole()== this.Procurement || this.StoreMan || this.Purchaser) ? null : 'hidden-row';
  }

  printPage() {
    window.print();
  }
  store(id) {
    this.storeService.store(id).subscribe(() => {
      this.loadData();
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }
}
