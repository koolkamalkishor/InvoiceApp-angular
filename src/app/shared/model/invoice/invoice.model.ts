import {ClientModel} from '../client/client.model';
import {PaymentTypeModel} from './payment-type.model';
import {InvoiceTypeModel} from './invoice-type.model';
import {UserSimpleModel} from '../user/user.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


export interface InvoiceModel {
  id: number;
  invoiceNumber: string;
  user: UserSimpleModel;
  createDate: string;
  saleDate: string;
  paymentDate: string;
  netValue: number;
  grossValue: number;
  paymentType: PaymentTypeModel;
  invoiceType: InvoiceTypeModel;
  client: ClientModel;
}