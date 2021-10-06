import { FinanceItemDTO } from "./finance-items.model";

export interface FinanceHeaderCreationDTO {
  vendorId: string;
  shipId: string;
  termsofPayment: string;
  termsOfDeliery: string;
  preparedBy: string;
  checkedBy: string;
  approvedBy: string;
  financeItemsIds: FinanceItemDTO[];
}
export interface FinanceHeaderDTO {
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

export interface FinanceHeaderPostGetDTO {
  financeItems: FinanceItemDTO[];
}

export interface FinanceHeaderPutGetDTO {
  financeHeader: FinanceHeaderDTO;
  selectedItems: FinanceItemDTO[];
  nonSelectedItems: FinanceItemDTO[];
}
