import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FinanceItemDTO } from "app/shared/models/finance-items.model";
import { FinanceHeaderCreationDTO } from "app/shared/models/finances.model";
import { FinancesService } from "app/shared/services/finances.service";

@Component({
  selector: "app-finance-create",
  templateUrl: "./finance-create.component.html",
  styleUrls: ["./finance-create.component.scss"],
})
export class FinanceCreateComponent implements OnInit {
  constructor(
    private financesService: FinancesService,
    private router: Router
  ) {}

  nonSelectedItems: FinanceItemDTO[];

  id: number;
  name: string;
  discription: string;
  size: number;
  qty: number;
  unitPrice: number;
  totalPrice: number;

  ngOnInit(): void {
    this.financesService.postGet().subscribe((response) => {
      this.nonSelectedItems = response.financeItems.map((item) => {
        return <FinanceItemDTO>{
          id: item.id,
          name: item.name,
          discription: item.discription,
          size: item.size,
          qty: item.qty,
          unitPrice: item.unitPrice,
          totalPrice: item.totalPrice,
        };
      });
    });
  }

  saveChanges(financeCreationDTO: FinanceHeaderCreationDTO) {
    this.financesService.create(financeCreationDTO).subscribe((id) => {
      this.router.navigate(["/finance/" + id]);
    });
  }
}
