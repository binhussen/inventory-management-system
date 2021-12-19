import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreHeader } from '../../../shared/models/store.model';
import { StoresService } from '../../../shared/services/stores.service';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.scss'],
})
export class StoreEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private storeService: StoresService,
    private router: Router
  ) {}

  model: StoreHeader;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.storeService.getById(params.id).subscribe((stores) => {
        this.model = stores;
      });
    });
  }

  saveChanges(store: StoreHeader) {
    this.activatedRoute.params.subscribe((params) => {
      this.storeService.edit(params.id, store).subscribe(() => {
        this.router.navigate(['/stores']);
      });
    });
  }
}
