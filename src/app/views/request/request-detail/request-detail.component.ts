import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  RequestHeader, RequestItem
} from '../../../shared/models/request.model';
import { RequestService } from '../../../shared/services/requests.service';
import Swal from 'sweetalert2';
import {SecurityService} from '../../../shared/services/security.service';
import {StoresService} from '../../../shared/services/stores.service';
import {StoreItem} from '../../../shared/models/store.model';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss'],
})
export class RequestDetailComponent implements OnInit {
  Department = 'DepartmentHead';
  Procurement = 'ProcurementManager';
  Purchaser = 'Purchaser';
  StoreMan = 'StoreMan';

  store : StoreItem[];

  request: Array<RequestItem>;
  header: RequestHeader;
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    'Name',
    'Type',
    'Quantity',
    'Unit Price',
    'Total Price',
    'Use',
    'Description',
    'Approved Qty',
    'Status',
    'Approved By',
    'Approved Date',
    'Purchased By',
    'Purchased Date',
    'Distributed By',
    'Distributed Date',
    'Actions'
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService,
    private securityService: SecurityService,
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
    this.requestService.getAllItem(this.paramsId).subscribe((items) => {
      this.request = items;
    });
  }

  getHeader() {
    this.requestService.getById(this.paramsId).subscribe((request) => {
      this.header = request;
    });
  }

  delete(id) {
    this.requestService.deleteItem(this.paramsId, id).subscribe(() => {
      this.getDetail();
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }

  approved(id, quantity) {
    var qtyapp = {
      approvedQuantity: quantity,
    };
    this.requestService.approved(this.paramsId, id, qtyapp).subscribe(() => {
      this.getDetail();
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }
  rejected(id) {
    this.requestService.rejected(this.paramsId, id).subscribe(() => {
      this.getDetail();
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }
  distributed(id, storeid) {
    var store = {
      storeItemId: storeid,
    };
    this.requestService.distribute(this.paramsId, id, store).subscribe(() => {
      this.getDetail();
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }
  buy(id) {
    this.requestService.buy(this.paramsId, id).subscribe(() => {
      this.getDetail();
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }
  notBuy(id) {
    this.requestService.notBuy(this.paramsId, id).subscribe(() => {
      this.getDetail();
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }


  showColumn(): string {
    return this.securityService.getRole()== this.Procurement ? null : 'hidden-row';
  }

  printPage() {
    window.print();
  }

  approve(id,qty){
      Swal.fire({
        title: 'Approved Quantity',
        input: 'number',
        customClass: {
          validationMessage: 'my-validation-message'
        },
        showDenyButton: true,
        denyButtonText: 'Reject',
        showCancelButton: true,
        preDeny: (value) => {
          this.rejected(id);
        },
        preConfirm: (value) => {
          if (!value) {
            Swal.showValidationMessage(
                '<i class="fa fa-info-circle"></i> Budget Code is required');
          }else if(value > qty) {
            Swal.showValidationMessage(
                '<i class="fa fa-info-circle"></i> Can not approve Greater than ' + qty);
          }else if(value <= 0) {
            Swal.showValidationMessage(
                '<i class="fa fa-info-circle"></i> Can not approve ' + value);
          } else {
            this.approved(id, value);
          }
        }
      });
  }
  distribute(id, qtyapp){
    this.storeService.getallList().subscribe((store) => {
      this.store = store;
    });
    const selectValue: string[] = this.store.map(x => x.name);

    Swal.fire({
      title: 'Distribute Material',
      input: 'select',
      inputOptions: selectValue,
      inputPlaceholder: 'Select Material',
      customClass: {
        validationMessage: 'my-validation-message'
      },
      showCancelButton: true,
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
              '<i class="fa fa-info-circle"></i> Please Select Material');
        }else if (qtyapp > this.store[value].qtyRemain) {
          Swal.showValidationMessage(
              '<i class="fa fa-info-circle"></i> Not enough Quantity');
        }else {
          this.distributed(id, this.store[value].id);
        }
      }
    });
  }
}
