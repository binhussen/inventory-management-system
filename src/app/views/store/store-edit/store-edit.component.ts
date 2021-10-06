import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StoreItemDTO } from "app/shared/models/store-items.model";
import {
  StoreHeaderCreationDTO,
  StoreHeaderDTO,
} from "app/shared/models/stores.model";
import { StoresService } from "app/shared/services/stores.service";

@Component({
  selector: "app-store-edit",
  templateUrl: "./store-edit.component.html",
  styleUrls: ["./store-edit.component.scss"],
})
export class StoreEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private storesService: StoresService,
    private router: Router
  ) {}

  model: StoreHeaderDTO;

  selectedItems: StoreItemDTO[];
  nonSelectedItems: StoreItemDTO[];

  id: number;
  name: string;
  itemSpecification: string;
  unit: number;
  qtyOrdered: number;
  qtyRecived: number;
  unitPrice: number;
  totalPrice: number;

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.activatedRoute.params.subscribe((params) => {
      this.storesService.putGet(params.id).subscribe((putGetDTO) => {
        this.model = putGetDTO.storeHeader;

        this.selectedItems = putGetDTO.selectedItems.map((item) => {
          return <StoreItemDTO>{
            id: item.id,
            name: item.name,
            itemSpecification: item.itemSpecification,
            unit: item.unit,
            qtyOrdered: item.qtyOrdered,
            qtyRecived: item.qtyRecived,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice,
          };
        });

        this.nonSelectedItems = putGetDTO.nonSelectedItems.map((item) => {
          return <StoreItemDTO>{
            id: item.id,
            name: item.name,
            itemSpecification: item.itemSpecification,
            unit: item.unit,
            qtyOrdered: item.qtyOrdered,
            qtyRecived: item.qtyRecived,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice,
          };
        });
      });
    });
  }
  saveChanges(storeHeaderCreationDTO: StoreHeaderCreationDTO) {
    this.storesService
      .edit(this.model.id, storeHeaderCreationDTO)
      .subscribe(() => {
        this.router.navigate(["/view/stores"]);
      });
  }
}
