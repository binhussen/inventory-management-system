import { PurchaseItemDTO } from "./purchase-items.model";

export interface PurchaseHeaderCreationDTO {
  askedBy: string;
  checkedBy: string;
  approvedBy: string;
  date: Date;
  purchaseItemsIds: PurchaseItemDTO[];
}
export interface PurchaseHeaderDTO {
  id: number;
  askedBy: string;
  checkedBy: string;
  approvedBy: string;
  date: Date;
  purchaseItems: PurchaseItemDTO[];
}

export interface PurchaseHeaderPostGetDTO {
  purchaseItems: PurchaseItemDTO[];
}

export interface PurchaseHeaderPutGetDTO {
  purchaseHeader: PurchaseHeaderDTO;
  selectedItems: PurchaseItemDTO[];
  nonSelectedItems: PurchaseItemDTO[];
}
