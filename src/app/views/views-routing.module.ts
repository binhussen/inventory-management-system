import { Routes } from "@angular/router";
import { CreateCompanyComponent } from "./companies/create-company/create-company.component";
import { EditCompanyComponent } from "./companies/edit-company/edit-company.component";
import { IndexCompaniesComponent } from "./companies/index-companies/index-companies.component";
import { CreateEmployeeComponent } from "./employees/create-employee/create-employee.component";
import { EditEmployeeComponent } from "./employees/edit-employee/edit-employee.component";
import { IndexEmployeesComponent } from "./employees/index-employees/index-employees.component";
import { StoreItemCreateComponent } from "./store/store-item-create/store-item-create.component";
import { StoreItemIndexComponent } from "./store/store-item-index/store-item-index.component";
import { UserIndexComponent } from "./users/user-index/user-index.component";
import { UserRegisterComponent } from "./users/user-register/user-register.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { CompanyEmployeeCreateComponent } from "./company-employee/company-employee-create/company-employee-create.component";
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

export const ViewsRoutingModule: Routes = [
  {
    path: "companies",
    component: IndexCompaniesComponent,
    data: { title: "Companies", breadcrumb: "Companies" },
  },
  {
    path: "trys",
    component: CompanyEmployeeCreateComponent,
  },
  {
    path: "companies/create",
    component: CreateCompanyComponent,
  },
  {
    path: "companies/edit/:id",
    component: EditCompanyComponent,
  },
  {
    path: "employees",
    component: IndexEmployeesComponent,
    data: { title: "Employees", breadcrumb: "Employees" },
  },
  {
    path: "employees/create",
    component: CreateEmployeeComponent,
  },
  {
    path: "employees/edit/:id",
    component: EditEmployeeComponent,
  },
  {
    path: "storeitems",
    component: StoreItemIndexComponent,
    data: { title: "StoreItems", breadcrumb: "StoreItems" },
  },
  {
    path: "storeitems/create",
    component: StoreItemCreateComponent,
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
