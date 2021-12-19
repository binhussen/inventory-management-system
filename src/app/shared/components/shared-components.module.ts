import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SearchModule } from '../search/search.module';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
import { HeaderSideComponent } from './header-side/header-side.component';
import { SidebarSideComponent } from './sidebar-side/sidebar-side.component';

// ONLY FOR DEMO

// ALWAYS REQUIRED
import { NotificationsComponent } from './notifications/notifications.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { AppComfirmComponent } from '../services/app-confirm/app-confirm.component';
import { AppLoaderComponent } from '../services/app-loader/app-loader.component';

import { ButtonLoadingComponent } from './button-loading/button-loading.component';
import { LoadListComponent } from './load-list/load-list.component';
import { MultipleSelectorComponent } from './multiple-selector/multiple-selector.component';
import { GenericListComponent } from './generic-list/generic-list.component';
import { AuthorizeViewComponent } from './authorize-view/authorize-view.component';
import { AuthorizeRoleComponent } from './authorize-role/authorize-role.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const components = [
  SidenavComponent,
  NotificationsComponent,
  SidebarSideComponent,
  HeaderSideComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  AppComfirmComponent,
  AppLoaderComponent,
  ButtonLoadingComponent,
  FooterComponent,
  LoadListComponent,
  MultipleSelectorComponent,
  GenericListComponent,
  AuthorizeViewComponent,
  AuthorizeRoleComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    SearchModule,
    SharedPipesModule,
    SharedMaterialModule,
  ],
  declarations: components,
  entryComponents: [AppComfirmComponent, AppLoaderComponent],
  exports: components,
})
export class SharedComponentsModule {}
