import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {InvoiceApiService} from '../../shared/service/invoice/invoice-api.service';
import {InvoiceMapperService} from '../../shared/service/invoice/invoice-mapper.service';
import {AuthApiService} from '../../shared/service/authentication/auth-api.service';
import {Router} from '@angular/router';
import {InvoiceModel} from '../../shared/model/invoice/invoice.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  invoiceId: number;
  invoices: InvoiceModel[];

  constructor(private invoiceApiService: InvoiceApiService,
              private invoiceMapperService: InvoiceMapperService,
              private authApiService: AuthApiService,
              private router: Router) { }

  ngOnInit() {
    this.invoiceId = this.authApiService.currentUserId;
    this.loadFirst5Invoices();

  }

  private loadFirst5Invoices() {
    this.invoiceApiService.getFirst5InvoicesByUserId(1).pipe(
      map(response => response.data),
      map(invoicesDto => invoicesDto
        .map(invoiceDto => this.invoiceMapperService.mapDtoToModel(invoiceDto)))
    ).subscribe(invoices => this.invoices = invoices);
  }

  navigateToInvoiceDetails(invoiceId: number) {
    this.router.navigate(['user', 'invoices', 'details'], {queryParams: { id: invoiceId}});
  }

}
