import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PurchaseItemCreationDTO } from "app/shared/models/purchase-items.model";
import { PurchaseItemsService } from "app/shared/services/purchase-items.service";

@Component({
  selector: "app-purchase-item-create",
  templateUrl: "./purchase-item-create.component.html",
  styleUrls: ["./purchase-item-create.component.scss"],
})
export class PurchaseItemCreateComponent implements OnInit {
  errors: string[] = [];

  constructor(
    private router: Router,
    private purchaseItemsService: PurchaseItemsService
  ) {}

  ngOnInit(): void {}

  saveChanges(purchaseItemCreationDTO: PurchaseItemCreationDTO) {
    this.purchaseItemsService.create(purchaseItemCreationDTO).subscribe(
      () => {
        this.router.navigate(["/view/purchases/create"]);
      }
      // , error => this.errors = parseWebAPIErrors(error)
    );
  }
}
