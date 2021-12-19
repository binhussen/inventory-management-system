import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreHeader } from '../../../shared/models/store.model';
import { StoresService } from '../../../shared/services/stores.service';

@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.scss'],
})
export class StoreCreateComponent implements OnInit {
  errors: string[] = [];

  constructor(private router: Router, private storeService: StoresService) {}

  ngOnInit(): void {}

  saveChanges(store: StoreHeader) {
    this.storeService.createWithItem(store).subscribe(() => {
      this.router.navigate(['/stores']);
    });
  }
}
