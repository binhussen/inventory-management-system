export interface StoreHeader {
  id?: string;
  supplierId?: string;
  graNo?: string;
  storeBy?: string;
  storeDate?: string;
  status?: number;
  createdByUser?: string;
  createdDate?: string;
  modifiedByUser?: string;
  modifiedDate?: string;
  storeItems?: Array<StoreItem>;
}

export interface StoreItem {
  id?: string;
  name?: string;
  itemSpecification?: string;
  unit?: string;
  qtyOrdered?: number;
  qtyReceived?: number;
  qtyRemain?: number;
  unitPrice?: number;
  totalPrice?: number;
  status?: number;
  createdByUser?: string;
  createdDate?: string;
  modifiedByUser?: string;
  modifiedDate?: string;
}
