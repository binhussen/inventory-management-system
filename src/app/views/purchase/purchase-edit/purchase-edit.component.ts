import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PurchaseItemDTO } from "app/shared/models/purchase-items.model";
import {
  PurchaseHeaderCreationDTO,
  PurchaseHeaderDTO,
} from "app/shared/models/purchases.model";
import { PurchasesService } from "app/shared/services/purchases.service";

@Component({
  selector: "app-purchase-edit",
  templateUrl: "./purchase-edit.component.html",
  styleUrls: ["./purchase-edit.component.scss"],
})
export class PurchaseEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private purchasesService: PurchasesService,
    private router: Router
  ) {}

  model: PurchaseHeaderDTO;

  selectedItems: PurchaseItemDTO[];
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
    this.LoadData();
  }

  LoadData() {
    this.activatedRoute.params.subscribe((params) => {
      this.purchasesService.putGet(params.id).subscribe((putGetDTO) => {
        this.model = putGetDTO.purchaseHeader;

        this.selectedItems = putGetDTO.selectedItems.map((item) => {
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

        this.nonSelectedItems = putGetDTO.nonSelectedItems.map((item) => {
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
    });
  }
  saveChanges(purchaseHeaderCreationDTO: PurchaseHeaderCreationDTO) {
    this.purchasesService
      .edit(this.model.id, purchaseHeaderCreationDTO)
      .subscribe(() => {
        this.router.navigate(["/view/purchases"]);
      });
  }
}
