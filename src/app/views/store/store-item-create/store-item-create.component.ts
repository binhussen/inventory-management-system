import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StoreItemCreationDTO } from "app/shared/models/store-items.model";
import { StoreItemsService } from "app/shared/services/store-items.service";

@Component({
  selector: "app-store-item-create",
  templateUrl: "./store-item-create.component.html",
  styleUrls: ["./store-item-create.component.scss"],
})
export class StoreItemCreateComponent implements OnInit {
  errors: string[] = [];

  constructor(
    private router: Router,
    private storeItemsService: StoreItemsService
  ) {}

  ngOnInit(): void {}

  saveChanges(storeItemCreationDTO: StoreItemCreationDTO) {
    this.storeItemsService.create(storeItemCreationDTO).subscribe(
      () => {
        this.router.navigate(["/view/storeitems"]);
      }
      // , error => this.errors = parseWebAPIErrors(error)
    );
  }
}
