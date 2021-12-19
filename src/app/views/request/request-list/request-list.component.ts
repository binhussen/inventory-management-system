import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { RequestHeader } from '../../../shared/models/request.model';
import { RequestService } from '../../../shared/services/requests.service';
import Swal from 'sweetalert2';
import {SecurityService} from '../../../shared/services/security.service';
import {DEPARTMENT} from '../../../shared/models/Common.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss'],
})
export class RequestListComponent implements OnInit {
  Department = 'DepartmentHead';
  Finance = 'FinanceManager';
  Procurement = 'ProcurementManager';
  request: RequestHeader[];
  totalAmountOfRecords;
  currentPage = 1;
  pageSize = 5;
  columnsToDisplay = [
    'Requested By',
    'Requested Date',
    'Budget By',
    'Budget Date',
    'Budget Code',
    'Modified By',
    'Modified Date',
    'Status',
    'Actions',
  ];
  constructor(private requestService: RequestService, private  securityService: SecurityService) {}

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this.requestService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.requestService.getAll().subscribe((response) => {
      if (this.securityService.getRole() == DEPARTMENT) {
        this.request = response.filter((user) => user.createdByUser == this.securityService.getUserName());
      } else {
        this.request = response;
      }
    });
  }

  updatePagination(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  approve(id, event) {
    var budget = {
      budgetCode: event,
    };
    this.requestService.addBudget(id, budget).subscribe(() => {
      this.loadData();
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }
  reject(id) {
    this.requestService.reject(id).subscribe(() => {
      this.loadData();
      Swal.fire('Success', 'The operation was successful', 'success');
    });
  }

  showColumn(): string {
    return this.securityService.getRole()== this.Procurement ? null : 'hidden-row';
  }

  printPage() {
    window.print();
  }

  budget(id){
    Swal.fire({
      title: 'Budget Code',
      input: 'text',
      customClass: {
        validationMessage: 'my-validation-message'
      },
      showDenyButton: true,
      denyButtonText: 'No budget',
      showCancelButton: true,
      preDeny: (value) => {
        this.reject(id);
      },
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
              '<i class="fa fa-info-circle"></i> Budget Code is required');
        } else {
          this.approve(id, value.toString());
        }
      }
      });
    }
  }


