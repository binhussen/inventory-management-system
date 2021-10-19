import { FinanceItemDTO } from "./finance-items.model";

export interface RequestHeaderCreationDTO {
  vendorId: string;
  shipId: string;
  termsofPayment: string;
  termsOfDeliery: string;
  preparedBy: string;
  checkedBy: string;
  approvedBy: string;
  financeItemsIds: FinanceItemDTO[];
}
export interface RequestHeaderDTO {
  id: number;
  vendorId: string;
  shipId: string;
  termsofPayment: string;
  termsOfDeliery: string;
  preparedBy: string;
  checkedBy: string;
  approvedBy: string;
  financeItems: FinanceItemDTO[];
}

export interface RequestHeaderPostGetDTO {
  financeItems: FinanceItemDTO[];
}

export interface FinanceHeaderPutGetDTO {
  financeHeader: RequestHeaderDTO;
  selectedItems: FinanceItemDTO[];
  nonSelectedItems: FinanceItemDTO[];
}

export interface RequestItemDTO {
  name: string;
  type: string;
  use: string;
  quantity: string;
  unitPrice: string;
  description: string;
  budgetCode?: string;
}

export interface RequestCreate {
  requestItems: Array<RequestItemDTO>;
}

export interface RequestHeader {
  id?: string;
  askedBy: string;
  checkedBy: string;
  approvedBy: string;
  date: string;
}
