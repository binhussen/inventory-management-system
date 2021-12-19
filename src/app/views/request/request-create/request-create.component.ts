import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../../shared/services/requests.service';
import {RequestHeader} from '../../../shared/models/request.model';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.scss'],
})
export class RequestCreateComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private requestService: RequestService) {}

  ngOnInit(): void {}

  saveChanges(request: RequestHeader) {
    this.requestService.createWithItem(request).subscribe(() => {
      this.router.navigate(['/requests']);
    });
  }
}
