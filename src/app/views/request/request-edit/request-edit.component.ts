import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  RequestHeader,
} from '../../../shared/models/request.model';
import { RequestService } from '../../../shared/services/requests.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.scss'],
})
export class RequestEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService,
    private router: Router
  ) {}

  model: RequestHeader;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.requestService.getById(params.id).subscribe((request) => {
        this.model = request;
      });
    });
  }

  saveChanges(request: RequestHeader) {
    this.activatedRoute.params.subscribe((params) => {
      this.requestService.edit(params.id, request).subscribe(() => {
        this.router.navigate(['/requests']);
      });
    });
  }
}
