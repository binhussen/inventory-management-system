import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FinanceItemCreationDTO,
  FinanceItemDTO,
} from "app/shared/models/finance-items.model";
import { FinanceItemsService } from "app/shared/services/finance-items.service";

@Component({
  selector: "app-finance-item-edit",
  templateUrl: "./finance-item-edit.component.html",
  styleUrls: ["./finance-item-edit.component.scss"],
})
export class FinanceItemEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private financeItemsService: FinanceItemsService,
    private router: Router
  ) {}

  model: FinanceItemDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.financeItemsService.getById(params.id).subscribe((financeItems) => {
        this.model = financeItems;
      });
    });
  }

  saveChanges(financeItemCreationDTO: FinanceItemCreationDTO) {
    this.financeItemsService
      .edit(this.model.id, financeItemCreationDTO)
      .subscribe(() => {
        this.router.navigate(["/view/financeitems"]);
      });
  }
}
