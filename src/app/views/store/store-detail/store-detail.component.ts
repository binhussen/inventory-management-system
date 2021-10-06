import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { StoreHeaderDTO } from "app/shared/models/stores.model";
import { StoresService } from "app/shared/services/stores.service";

@Component({
  selector: "app-store-detail",
  templateUrl: "./store-detail.component.html",
  styleUrls: ["./store-detail.component.scss"],
})
export class StoreDetailComponent implements OnInit {
  constructor(
    private storesService: StoresService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  storeHeader: StoreHeaderDTO;
  Date: Date;
  trailerURL: SafeResourceUrl;
  //coordinates: coordinatesMapWithMessage[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.storesService.getById(params.id).subscribe((storeHeader) => {
        this.storeHeader = storeHeader;
        this.Date = new Date(storeHeader.date);
      });
    });
  }
}
