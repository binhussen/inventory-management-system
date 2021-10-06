import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  StoreItemCreationDTO,
  StoreItemDTO,
} from "app/shared/models/store-items.model";
import { StoreItemsService } from "app/shared/services/store-items.service";

@Component({
  selector: "app-store-item-edit",
  templateUrl: "./store-item-edit.component.html",
  styleUrls: ["./store-item-edit.component.scss"],
})
export class StoreItemEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private storeItemsService: StoreItemsService,
    private router: Router
  ) {}

  model: StoreItemDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.storeItemsService.getById(params.id).subscribe((storeItems) => {
        this.model = storeItems;
      });
    });
  }

  saveChanges(storeItemCreationDTO: StoreItemCreationDTO) {
    this.storeItemsService
      .edit(this.model.id, storeItemCreationDTO)
      .subscribe(() => {
        this.router.navigate(["/view/storeitems"]);
      });
  }
}
