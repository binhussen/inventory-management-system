import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchViewRoutingModule } from './search-view-routing.module';
import { ResultPageComponent } from './result-page/result-page.component';
import { MatCardModule } from '@angular/material/card';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [ResultPageComponent],
  imports: [
    MatCardModule,
    CommonModule,
    NgxDatatableModule,
    SearchViewRoutingModule,
  ],
})
export class SearchViewModule {}
