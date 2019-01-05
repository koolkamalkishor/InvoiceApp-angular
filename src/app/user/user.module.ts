import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import { UserRootComponent } from './user-root.component';
import {RouterModule} from '@angular/router';
import {userModuleRoutes} from './user-routings';
import {DataTablesModule} from 'angular-datatables';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClientsComponent } from './clients/clients.component';
import {ClientNewComponent} from './client-new/client-new.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceNewComponent } from './invoice-new/invoice-new.component';
import {DatepickerModule} from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserRootComponent,
    UserSettingsComponent,
    ClientsComponent,
    ClientNewComponent,
    ClientEditComponent,
    InvoicesComponent,
    InvoiceNewComponent,
    InvoiceDetailsComponent,

  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    NgbModule,
    DatepickerModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    RouterModule.forChild(userModuleRoutes)
  ]
})
export class UserModule { }
