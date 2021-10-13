import { Routes } from "@angular/router";
import { CreateCompanyComponent } from "./companies/create-company/create-company.component";
import { EditCompanyComponent } from "./companies/edit-company/edit-company.component";
import { IndexCompaniesComponent } from "./companies/index-companies/index-companies.component";
import { CreateEmployeeComponent } from "./employees/create-employee/create-employee.component";
import { EditEmployeeComponent } from "./employees/edit-employee/edit-employee.component";
import { IndexEmployeesComponent } from "./employees/index-employees/index-employees.component";
import { StoreCreateComponent } from "./store/store-create/store-create.component";
import { StoreDetailComponent } from "./store/store-detail/store-detail.component";
import { StoreEditComponent } from "./store/store-edit/store-edit.component";
import { StoreItemCreateComponent } from "./store/store-item-create/store-item-create.component";
import { StoreItemEditComponent } from "./store/store-item-edit/store-item-edit.component";
import { StoreItemIndexComponent } from "./store/store-item-index/store-item-index.component";
import { StoreListComponent } from "./store/store-list/store-list.component";

import { PurchaseCreateComponent } from "./purchase/purchase-create/purchase-create.component";
import { PurchaseDetailComponent } from "./purchase/purchase-detail/purchase-detail.component";
import { PurchaseEditComponent } from "./purchase/purchase-edit/purchase-edit.component";
import { PurchaseItemCreateComponent } from "./purchase/purchase-item-create/purchase-item-create.component";
import { PurchaseItemEditComponent } from "./purchase/purchase-item-edit/purchase-item-edit.component";
import { PurchaseItemIndexComponent } from "./purchase/purchase-item-index/purchase-item-index.component";
import { PurchaseListComponent } from "./purchase/purchase-list/purchase-list.component";

import { FinanceCreateComponent } from "./finance/finance-create/finance-create.component";
import { FinanceDetailComponent } from "./finance/finance-detail/finance-detail.component";
import { FinanceEditComponent } from "./finance/finance-edit/finance-edit.component";
import { FinanceItemCreateComponent } from "./finance/finance-item-create/finance-item-create.component";
import { FinanceItemEditComponent } from "./finance/finance-item-edit/finance-item-edit.component";
import { FinanceItemIndexComponent } from "./finance/finance-item-index/finance-item-index.component";
import { FinanceListComponent } from "./finance/finance-list/finance-list.component";
import { UserIndexComponent } from "./users/user-index/user-index.component";
import { UserRegisterComponent } from "./users/user-register/user-register.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { CompanyEmployeeFormComponent } from "./company-employee/company-employee-form/company-employee-form.component";

export const ViewsRoutingModule: Routes = [
  {
    path: "companies",
    component: IndexCompaniesComponent,
    data: { title: "Companies", breadcrumb: "Companies" },
  },
  {
    path:"trys",
    component: CompanyEmployeeFormComponent
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
    path: "storeitems/edit/:id",
    component: StoreItemEditComponent,
  },
  {
    path: "stores",
    component: StoreListComponent,
    data: { title: "Stores", breadcrumb: "Stores" },
  },
  {
    path: "stores/create",
    component: StoreCreateComponent,
  },
  {
    path: "stores/edit/:id",
    component: StoreEditComponent,
  },
  {
    path: "store/:id",
    component: StoreDetailComponent,
  },
  {
    path: "purchaseitems",
    component: PurchaseItemIndexComponent,
    data: { title: "PurchaseItems", breadcrumb: "PurchaseItems" },
  },
  {
    path: "purchaseitems/create",
    component: PurchaseItemCreateComponent,
  },
  {
    path: "purchaseitems/edit/:id",
    component: PurchaseItemEditComponent,
  },
  {
    path: "purchases",
    component: PurchaseListComponent,
    data: { title: "Purchases", breadcrumb: "Purchases" },
  },
  {
    path: "purchases/create",
    component: PurchaseCreateComponent,
  },
  {
    path: "purchases/edit/:id",
    component: PurchaseEditComponent,
  },
  {
    path: "purchase/:id",
    component: PurchaseDetailComponent,
  },
  {
    path: "financeitems",
    component: FinanceItemIndexComponent,
    data: { title: "FinanceItems", breadcrumb: "FinanceItems" },
  },
  {
    path: "financeitems/create",
    component: FinanceItemCreateComponent,
  },
  {
    path: "financeitems/edit/:id",
    component: FinanceItemEditComponent,
  },
  {
    path: "finances",
    component: FinanceListComponent,
    data: { title: "Finances", breadcrumb: "Finances" },
  },
  {
    path: "finances/create",
    component: FinanceCreateComponent,
  },
  {
    path: "finances/edit/:id",
    component: FinanceEditComponent,
  },
  {
    path: "finance/:id",
    component: FinanceDetailComponent,
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
  }
];
