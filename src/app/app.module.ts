import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, NgModel} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './shared/shared.module';
import {UserModule} from './user/user.module';
import {AdminModule} from './admin/admin.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    NgbModule,
    // NgModel,
    // NgModule,
    SharedModule,
    UserModule,
    AdminModule,
    RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
