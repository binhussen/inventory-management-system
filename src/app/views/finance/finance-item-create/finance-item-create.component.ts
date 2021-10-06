import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FinanceItemCreationDTO } from "app/shared/models/finance-items.model";
import { FinanceItemsService } from "app/shared/services/finance-items.service";

@Component({
  selector: "app-finance-item-create",
  templateUrl: "./finance-item-create.component.html",
  styleUrls: ["./finance-item-create.component.scss"],
})
export class FinanceItemCreateComponent implements OnInit {
  errors: string[] = [];

  constructor(
    private router: Router,
    private financeItemsService: FinanceItemsService
  ) {}

  ngOnInit(): void {}

  saveChanges(financeItemCreationDTO: FinanceItemCreationDTO) {
    this.financeItemsService.create(financeItemCreationDTO).subscribe(
      () => {
        this.router.navigate(["/view/financeitems"]);
      }
      // , error => this.errors = parseWebAPIErrors(error)
    );
  }
}
