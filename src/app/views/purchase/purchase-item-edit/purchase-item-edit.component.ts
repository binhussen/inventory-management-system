import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  PurchaseItemCreationDTO,
  PurchaseItemDTO,
} from "app/shared/models/purchase-items.model";
import { PurchaseItemsService } from "app/shared/services/purchase-items.service";

@Component({
  selector: "app-purchase-item-edit",
  templateUrl: "./purchase-item-edit.component.html",
  styleUrls: ["./purchase-item-edit.component.scss"],
})
export class PurchaseItemEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private purchaseItemsService: PurchaseItemsService,
    private router: Router
  ) {}

  model: PurchaseItemDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.purchaseItemsService
        .getById(params.id)
        .subscribe((purchaseItems) => {
          this.model = purchaseItems;
        });
    });
  }

  saveChanges(purchaseItemCreationDTO: PurchaseItemCreationDTO) {
    this.purchaseItemsService
      .edit(this.model.id, purchaseItemCreationDTO)
      .subscribe(() => {
        this.router.navigate(["/view/purchaseitems"]);
      });
  }
}
