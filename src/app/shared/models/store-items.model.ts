export interface StoreItemCreationDTO {
  name: string;
  itemSpecification: string;
  unit: number;
  qtyOrdered: number;
  qtyRecived: number;
  unitPrice: number;
  totalPrice: number;
}

export interface StoreItemDTO {
  id: number;
  name: string;
  itemSpecification: string;
  unit: number;
  qtyOrdered: number;
  qtyRecived: number;
  unitPrice: number;
  totalPrice: number;
}
