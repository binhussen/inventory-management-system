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
import { StoreItemComponent } from "./stores/store-item/store-item.component";
import {AuthGuard} from '../shared/guards/auth.guard';
import {RoleGuard} from '../shared/guards/role.guard';
import {ADMINISTRATOR, DEPARTMENT, FINANCE, PROCUREMENT, PURCHASER, STOREMAN} from '../shared/models/Common.model';

export const ViewsRoutingModule: Routes = [
  {
    path: "company/create",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: CompanyCreateComponent,
  },
  {
    path: "company/edit/:id",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: CompanyEditComponent,
  },
  {
    path: "companies",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: CompanyListComponent,
  },
  {
    path: "company/:id",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: CompanyDetailComponent,
  },
  {
    path: "company/:headId/edit/:id",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: CompanyEmployeeEditComponent,
  },
  {
    path: "employees",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: IndexEmployeesComponent
  },
  {
    path: "employee/create",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: CreateEmployeeComponent,
  },
  {
    path: "employee/edit/:id",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: EditEmployeeComponent,
  },
  {
    path: "stores",
    component: StoreListComponent,
    canActivate: [RoleGuard],
    data: {roles: [PURCHASER, STOREMAN, PROCUREMENT, DEPARTMENT]}
  },
  {
    path: "store/create",
    canActivate: [RoleGuard],
    data: {roles: [PURCHASER]},
    component: StoreCreateComponent,
  },
  {
    path: "store/edit/:id",
    canActivate: [RoleGuard],
    data: {roles: [PURCHASER]},
    component: StoreEditComponent,
  },
  {
    path: "store/:id",
    canActivate: [RoleGuard],
    data: {roles: [PURCHASER, STOREMAN, PROCUREMENT, DEPARTMENT]},
    component: StoreDetailComponent,
  },
  {
    path: "storeitem/:headId/edit/:id",
    canActivate: [RoleGuard],
    data: {roles: [PURCHASER]},
    component: StoreitemEditComponent,
  },
  {
    path: "storesitem",
    canActivate: [RoleGuard],
    data: {roles: [PURCHASER, STOREMAN, PROCUREMENT, DEPARTMENT]},
    component: StoreItemComponent,
  },
  {
    path: "requests",
    component: RequestListComponent,
    canActivate: [RoleGuard],
    data: {roles: [PURCHASER, STOREMAN, PROCUREMENT, DEPARTMENT, FINANCE]},
  },
  {
    path: "request/create",
    canActivate: [RoleGuard],
    data: {roles: [DEPARTMENT]},
    component: RequestCreateComponent,
  },
  {
    path: "request/edit/:id",
    canActivate: [RoleGuard],
    data: {roles: [DEPARTMENT]},
    component: RequestEditComponent,
  },
  {
    path: "request/:id",
    canActivate: [RoleGuard],
    data: {roles: [PURCHASER, STOREMAN, PROCUREMENT, DEPARTMENT, FINANCE]},
    component: RequestDetailComponent,
  },
  {
    path: "requestitem/:headId/edit/:id",
    canActivate: [RoleGuard],
    data: {roles: [DEPARTMENT]},
    component: RequestitemEditComponent,
  },
  {
    path: "users",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: UserIndexComponent
  },
  {
    path: "user/register",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: UserRegisterComponent,
  },
  {
    path: "user/edit/:id",
    canActivate: [RoleGuard],
    data: {roles: [ADMINISTRATOR]},
    component: UserEditComponent,
  },
];
