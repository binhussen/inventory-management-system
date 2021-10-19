import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StoreItemDTO } from "app/shared/models/store-items.model";
import { StoreHeaderCreationDTO } from "app/shared/models/stores.model";
import { StoresService } from "app/shared/services/stores.service";

@Component({
  selector: "app-store-create",
  templateUrl: "./store-create.component.html",
  styleUrls: ["./store-create.component.scss"],
})
export class StoreCreateComponent implements OnInit {
  constructor(private storesService: StoresService, private router: Router) {}

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
    this.storesService.postGet().subscribe((response) => {
      this.nonSelectedItems = response.storeItems.map((item) => {
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
  }

  saveChanges(storeCreationDTO: StoreHeaderCreationDTO) {
    console.log(storeCreationDTO);
    this.storesService.create(storeCreationDTO).subscribe((id) => {
      this.router.navigate(["/view/stores"]);
    });
  }
}
