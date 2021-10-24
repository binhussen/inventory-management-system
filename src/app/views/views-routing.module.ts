import { Routes } from "@angular/router";
import { CreateEmployeeComponent } from "./employees/create-employee/create-employee.component";
import { EditEmployeeComponent } from "./employees/edit-employee/edit-employee.component";
import { IndexEmployeesComponent } from "./employees/index-employees/index-employees.component";
import { UserIndexComponent } from "./users/user-index/user-index.component";
import { UserRegisterComponent } from "./users/user-register/user-register.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { RequestCreateComponent } from "./request/request-create/request-create.component";
import { StoreListComponent } from "./stores/store-list/store-list.component";
import { StoreCreateComponent } from "./stores/store-create/store-create.component";
import { StoreDetailComponent } from "./stores/store-detail/store-detail.component";
import { StoreEditComponent } from "./stores/store-edit/store-edit.component";
import { StoreitemEditComponent } from "./stores/storeitem-edit/storeitem-edit.component";
import { RequestListComponent } from "./request/request-list/request-list.component";
import { RequestEditComponent } from "./request/request-edit/request-edit.component";
import { RequestDetailComponent } from "./request/request-detail/request-detail.component";
import { RequestitemEditComponent } from "./request/requestitem-edit/requestitem-edit.component";
import { CompanyCreateComponent } from "./company/company-create/company-create.component";
import { CompanyEditComponent } from "./company/company-edit/company-edit.component";
import { CompanyListComponent } from "./company/company-list/company-list.component";
import { CompanyDetailComponent } from "./company/company-detail/company-detail.component";
import { CompanyEmployeeEditComponent } from "./company/company-employee-edit/company-employee-edit.component";

export const ViewsRoutingModule: Routes = [
  {
    path: "company/create",
    component: CompanyCreateComponent,
  },
  {
    path: "company/edit/:id",
    component: CompanyEditComponent,
  },
  {
    path: "companies",
    component: CompanyListComponent,
  },
  {
    path: "company/:id",
    component: CompanyDetailComponent,
  },
  {
    path: "company/:headId/edit/:id",
    component: CompanyEmployeeEditComponent,
  },
  {
    path: "employees",
    component: IndexEmployeesComponent,
    data: { title: "Employees", breadcrumb: "Employees" },
  },
  {
    path: "employee/create",
    component: CreateEmployeeComponent,
  },
  {
    path: "employee/edit/:id",
    component: EditEmployeeComponent,
  },
  {
    path: "stores",
    component: StoreListComponent,
    data: { title: "Stores", breadcrumb: "Stores" },
  },
  {
    path: "store/create",
    component: StoreCreateComponent,
  },
  {
    path: "store/edit/:id",
    component: StoreEditComponent,
  },
  {
    path: "store/:id",
    component: StoreDetailComponent,
  },
  {
    path: "storeitem/:headId/edit/:id",
    component: StoreitemEditComponent,
  },
  {
    path: "requests",
    component: RequestListComponent,
    data: { title: "Requests", breadcrumb: "Requests" },
  },
  {
    path: "request/create",
    component: RequestCreateComponent,
  },
  {
    path: "request/edit/:id",
    component: RequestEditComponent,
  },
  {
    path: "request/:id",
    component: RequestDetailComponent,
  },
  {
    path: "requestitem/:headId/edit/:id",
    component: RequestitemEditComponent,
  },
  {
    path: "users",
    component: UserIndexComponent,
    data: { title: "Users", breadcrumb: "users" },
  },
  {
    path: "user/register",
    component: UserRegisterComponent,
  },
  {
    path: "user/edit/:id",
    component: UserEditComponent,
  },
];
