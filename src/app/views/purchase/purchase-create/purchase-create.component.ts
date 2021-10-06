import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PurchaseItemDTO } from "app/shared/models/purchase-items.model";
import { PurchaseHeaderCreationDTO } from "app/shared/models/purchases.model";
import { PurchasesService } from "app/shared/services/purchases.service";

@Component({
  selector: "app-purchase-create",
  templateUrl: "./purchase-create.component.html",
  styleUrls: ["./purchase-create.component.scss"],
})
export class PurchaseCreateComponent implements OnInit {
  constructor(
    private purchasesService: PurchasesService,
    private router: Router
  ) {}

  nonSelectedItems: PurchaseItemDTO[];
  id: number;
  name: string;
  type: string;
  dicription: string;
  use: string;
  qty: number;
  unitPrice: number;
  totalPrice: number;
  budgetCode: string;

  ngOnInit(): void {
    this.purchasesService.postGet().subscribe((response) => {
      this.nonSelectedItems = response.purchaseItems.map((item) => {
        return <PurchaseItemDTO>{
          id: item.id,
          name: item.name,
          type: item.type,
          dicription: item.dicription,
          use: item.use,
          qty: item.qty,
          unitPrice: item.unitPrice,
          totalPrice: item.totalPrice,
          budgetCode: item.budgetCode,
        };
      });
    });
  }

  saveChanges(purchaseCreationDTO: PurchaseHeaderCreationDTO) {
    console.log(purchaseCreationDTO);
    this.purchasesService.create(purchaseCreationDTO).subscribe((id) => {
      this.router.navigate(["/purchase/" + id]);
    });
  }
}
