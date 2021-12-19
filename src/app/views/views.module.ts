import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { ViewsRoutingModule } from './views-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { MatSelect } from '@angular/material/select';

import { FileUploadModule } from 'ng2-file-upload';
import { FormEmployeeComponent } from './employees/form-employee/form-employee.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestFormComponent } from './request/request-form/request-form.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { StoreCreateComponent } from './stores/store-create/store-create.component';
import { StoreDetailComponent } from './stores/store-detail/store-detail.component';
import { StoreEditComponent } from './stores/store-edit/store-edit.component';
import { StoreListComponent } from './stores/store-list/store-list.component';
import { StoreFormComponent } from './stores/store-form/store-form.component';
import { StoreitemEditComponent } from './stores/storeitem-edit/storeitem-edit.component';
import { RequestitemEditComponent } from './request/requestitem-edit/requestitem-edit.component';
import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { CompanyDetailComponent } from './company/company-detail/company-detail.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEmployeeEditComponent } from './company/company-employee-edit/company-employee-edit.component';
import { StoreItemComponent } from './stores/store-item/store-item.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { IndexEmployeesComponent } from './employees/index-employees/index-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { UserIndexComponent } from './users/user-index/user-index.component';

@NgModule({
  declarations: [
    IndexEmployeesComponent,
    FormEmployeeComponent,
    UserFormComponent,
    UserRegisterComponent,
    UserEditComponent,
    UserProfileComponent,
    CompanyEmployeeEditComponent,
    RequestFormComponent,
    StoreFormComponent,
    CompanyFormComponent,
    CompanyListComponent,
    StoreItemComponent,
    RequestListComponent,
    RequestDetailComponent,
    StoreCreateComponent,
    StoreDetailComponent,
    StoreEditComponent,
    StoreListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    UserIndexComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    StoreitemEditComponent,
    RequestitemEditComponent,
    CompanyCreateComponent,
    CompanyDetailComponent,
    CompanyEditComponent,
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
