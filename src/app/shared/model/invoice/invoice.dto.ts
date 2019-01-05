import {UserSimpleDto} from '../user/user-dto';
import {ClientDto} from '../client/client-dto';
import {PaymentTypeDto} from './payment-type.dto';
import {InvoiceTypeDto} from './invoice-type.dto';
import {InvoicePositionDto} from './invoice-position.dto';

export interface InvoiceDto {
  id: number;
  invoiceNumber: string;
  user: UserSimpleDto;
  createDate: string;
  saleDate: string;
  paymentDate: string;
  netAmount: number;
  grossAmount: number;
  paymentType: PaymentTypeDto;
  invoiceVersion: InvoiceTypeDto;
  client: ClientDto;
  invoicePositions: InvoicePositionDto[];
}
