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
import { MaterialModule } from "app/shared/modules/material/material.module";
import { UserIndexComponent } from "./users/user-index/user-index.component";
import { UserFormComponent } from "./users/user-form/user-form.component";
import { UserRegisterComponent } from "./users/user-register/user-register.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserProfileComponent } from "./users/user-profile/user-profile.component";
import { CompanyEmployeeFormComponent } from "./company-employee/company-employee-form/company-employee-form.component";
import { CompanyEmployeeCreateComponent } from "./company-employee/company-employee-create/company-employee-create.component";
import { CompanyEmployeeListComponent } from "./company-employee/company-employee-list/company-employee-list.component";
import { CompanyEmployeeEditComponent } from "./company-employee/company-employee-edit/company-employee-edit.component";
import { RequestCreateComponent } from "./request/request-create/request-create.component";
import { RequestEditComponent } from "./request/request-edit/request-edit.component";
import { RequestFormComponent } from "./request/request-form/request-form.component";
import { RequestListComponent } from "./request/request-list/request-list.component";
import { RequestDetailComponent } from "./request/request-detail/request-detail.component";
import { StoreCreateComponent } from "./stores/store-create/store-create.component";
import { StoreDetailComponent } from "./stores/store-detail/store-detail.component";
import { StoreEditComponent } from "./stores/store-edit/store-edit.component";
import { StoreListComponent } from "./stores/store-list/store-list.component";
import { StoreFormComponent } from "./stores/store-form/store-form.component";
import { StoreitemEditComponent } from "./stores/storeitem-edit/storeitem-edit.component";
import { RequestitemEditComponent } from "./request/requestitem-edit/requestitem-edit.component";

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
    UserIndexComponent,
    UserFormComponent,
    UserRegisterComponent,
    UserEditComponent,
    UserProfileComponent,
    CompanyEmployeeFormComponent,
    CompanyEmployeeCreateComponent,
    CompanyEmployeeListComponent,
    CompanyEmployeeEditComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestFormComponent,
    RequestListComponent,
    RequestDetailComponent,
    StoreCreateComponent,
    StoreDetailComponent,
    StoreEditComponent,
    StoreListComponent,
    StoreFormComponent,
    StoreitemEditComponent,
    RequestitemEditComponent,
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
