import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

import { ViewsRoutingModule } from "./views-routing.module";
import { FormCompanyComponent } from "./companies/form-company/form-company.component";
import { IndexCompaniesComponent } from "./companies/index-companies/index-companies.component";
import { CreateCompanyComponent } from "./companies/create-company/create-company.component";
import { EditCompanyComponent } from "./companies/edit-company/edit-company.component";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedModule } from "app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatStepperModule } from "@angular/material/stepper";
import { FlexLayoutModule } from "@angular/flex-layout";
import { QuillModule } from "ngx-quill";
import { MatSelect } from "@angular/material/select";

import { FileUploadModule } from "ng2-file-upload";
import { IndexEmployeesComponent } from "./employees/index-employees/index-employees.component";
import { CreateEmployeeComponent } from "./employees/create-employee/create-employee.component";
import { EditEmployeeComponent } from "./employees/edit-employee/edit-employee.component";
import { FormEmployeeComponent } from "./employees/form-employee/form-employee.component";
import { StoreListComponent } from "./store/store-list/store-list.component";
import { StoreDetailComponent } from "./store/store-detail/store-detail.component";
import { StoreCreateComponent } from "./store/store-create/store-create.component";
import { StoreEditComponent } from "./store/store-edit/store-edit.component";
import { StoreFormComponent } from "./store/store-form/store-form.component";
import { FinanceFormComponent } from "./finance/finance-form/finance-form.component";
import { FinanceCreateComponent } from "./finance/finance-create/finance-create.component";
import { FinanceEditComponent } from "./finance/finance-edit/finance-edit.component";
import { FinanceListComponent } from "./finance/finance-list/finance-list.component";
import { FinanceDetailComponent } from "./finance/finance-detail/finance-detail.component";
import { PurchaseDetailComponent } from "./purchase/purchase-detail/purchase-detail.component";
import { PurchaseCreateComponent } from "./purchase/purchase-create/purchase-create.component";
import { PurchaseEditComponent } from "./purchase/purchase-edit/purchase-edit.component";
import { PurchaseFormComponent } from "./purchase/purchase-form/purchase-form.component";
import { PurchaseListComponent } from "./purchase/purchase-list/purchase-list.component";
import { StoreItemCreateComponent } from "./store/store-item-create/store-item-create.component";
import { StoreItemEditComponent } from "./store/store-item-edit/store-item-edit.component";
import { StoreItemFormComponent } from "./store/store-item-form/store-item-form.component";
import { StoreItemIndexComponent } from "./store/store-item-index/store-item-index.component";
import { FinanceItemCreateComponent } from "./finance/finance-item-create/finance-item-create.component";
import { FinanceItemEditComponent } from "./finance/finance-item-edit/finance-item-edit.component";
import { FinanceItemFormComponent } from "./finance/finance-item-form/finance-item-form.component";
import { FinanceItemIndexComponent } from "./finance/finance-item-index/finance-item-index.component";
import { PurchaseItemCreateComponent } from "./purchase/purchase-item-create/purchase-item-create.component";
import { PurchaseItemEditComponent } from "./purchase/purchase-item-edit/purchase-item-edit.component";
import { PurchaseItemFormComponent } from "./purchase/purchase-item-form/purchase-item-form.component";
import { PurchaseItemIndexComponent } from "./purchase/purchase-item-index/purchase-item-index.component";
import { MaterialModule } from "app/shared/modules/material/material.module";
import { UserIndexComponent } from "./users/user-index/user-index.component";
import { UserFormComponent } from "./users/user-form/user-form.component";
import { UserRegisterComponent } from "./users/user-register/user-register.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserProfileComponent } from "./users/user-profile/user-profile.component";

@NgModule({
  declarations: [
    FormCompanyComponent,
    IndexCompaniesComponent,
    CreateCompanyComponent,
    EditCompanyComponent,
    IndexEmployeesComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    FormEmployeeComponent,
    StoreListComponent,
    StoreDetailComponent,
    StoreCreateComponent,
    StoreEditComponent,
    StoreFormComponent,
    StoreItemCreateComponent,
    StoreItemEditComponent,
    StoreItemFormComponent,
    StoreItemIndexComponent,
    FinanceFormComponent,
    FinanceCreateComponent,
    FinanceEditComponent,
    FinanceListComponent,
    FinanceDetailComponent,
    FinanceItemCreateComponent,
    FinanceItemEditComponent,
    FinanceItemFormComponent,
    FinanceItemIndexComponent,
    PurchaseDetailComponent,
    PurchaseCreateComponent,
    PurchaseEditComponent,
    PurchaseFormComponent,
    PurchaseListComponent,
    PurchaseItemCreateComponent,
    PurchaseItemEditComponent,
    PurchaseItemFormComponent,
    PurchaseItemIndexComponent,
    UserIndexComponent,
    UserFormComponent,
    UserRegisterComponent,
    UserEditComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    QuillModule,
    FileUploadModule,

    RouterModule.forChild(ViewsRoutingModule),
    SharedModule,

    //
    // BrowserAnimationsModule,
    // LeafletModule,
    // MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot(),
    MaterialModule,
  ],
})
export class ViewsModule {}
