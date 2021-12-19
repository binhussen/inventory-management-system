export interface RequestHeader {
  id?: string;
  budgetBy?: string;
  budgetCode?: string;
  budgetDate?: string;
  createdByUser?: string;
  createdDate?: string;
  modifiedByUser?: string;
  modifiedDate?: string;
  status?: number;
  requestItems?: Array<RequestItem>;
}
export interface RequestItem {
  id?: string;
  name?: string;
  type?: string;
  use?: string;
  quantity?: number;
  unitPrice?: number;
  totalPrice?: number;
  description?: string;
  budgetCode?: string;
  approvedQuantity?: number;
  approvedBy?: string;
  approvedDate?: string;
  buyBy?: string;
  buyDate?: string;
  distributeBy?: string;
  distributeDate?: string;
  status?: number;
  createdByUser?: string;
  createdDate?: string;
  modifiedByUser?: string;
  modifiedDate?: string;
}
