import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FinanceItemDTO } from "app/shared/models/finance-items.model";
import {
  FinanceHeaderCreationDTO,
  FinanceHeaderDTO,
} from "app/shared/models/finances.model";
import { FinancesService } from "app/shared/services/finances.service";

@Component({
  selector: "app-finance-edit",
  templateUrl: "./finance-edit.component.html",
  styleUrls: ["./finance-edit.component.scss"],
})
export class FinanceEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private financesService: FinancesService,
    private router: Router
  ) {}

  model: FinanceHeaderDTO;

  selectedItems: FinanceItemDTO[];
  nonSelectedItems: FinanceItemDTO[];

  id: number;
  name: string;
  discription: string;
  size: number;
  qty: number;
  unitPrice: number;
  totalPrice: number;

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.activatedRoute.params.subscribe((params) => {
      this.financesService.putGet(params.id).subscribe((putGetDTO) => {
        this.model = putGetDTO.financeHeader;

        this.selectedItems = putGetDTO.selectedItems.map((item) => {
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

        this.nonSelectedItems = putGetDTO.nonSelectedItems.map((item) => {
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
    });
  }
  saveChanges(financeHeaderCreationDTO: FinanceHeaderCreationDTO) {
    this.financesService
      .edit(this.model.id, financeHeaderCreationDTO)
      .subscribe(() => {
        this.router.navigate(["/view/finances"]);
      });
  }
}
