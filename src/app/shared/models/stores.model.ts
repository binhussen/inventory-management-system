import { StoreItemDTO } from "./store-items.model";

export interface StoreHeaderCreationDTO {
  supplierId: string;
  reciverId: string;
  date: Date;
  graNo: string;
  pox: string;
  checkedBy: string;
  acceptedBy: string;
  inspectedBy: string;
  storeItemsIds: StoreItemDTO[];
}
export interface StoreHeaderDTO {
  id: number;
  supplierId: string;
  reciverId: string;
  date: Date;
  graNo: string;
  pox: string;
  checkedBy: string;
  acceptedBy: string;
  inspectedBy: string;
  storeItems: StoreItemDTO[];
}

export interface StoreHeaderPostGetDTO {
  storeItems: StoreItemDTO[];
}

export interface StoreHeaderPutGetDTO {
  storeHeader: StoreHeaderDTO;
  selectedItems: StoreItemDTO[];
  nonSelectedItems: StoreItemDTO[];
}
