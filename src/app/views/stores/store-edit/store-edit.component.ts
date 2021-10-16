import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { storeCreate } from "app/shared/models/stores.model";
import { StoresService } from "app/shared/services/stores.service";

@Component({
  selector: "app-store-edit",
  templateUrl: "./store-edit.component.html",
  styleUrls: ["./store-edit.component.scss"],
})
export class StoreEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private storeService: StoresService,
    private router: Router
  ) {}

  model: storeCreate;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.storeService.getById(params.id).subscribe((stores) => {
        // this.model = stores;
        console.log();
      });
    });
  }

  saveChanges(store: storeCreate) {
    // this.storeService
    //   .edit(this.model.id, employeeCreationDTO)
    //   .subscribe(() => {
    //     this.router.navigate(["/view/employees"]);
    //   });
  }
}
