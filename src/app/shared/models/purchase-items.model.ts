export interface PurchaseItemCreationDTO {
  name: string;
  type: string;
  dicription: string;
  use: string;
  qty: number;
  unitPrice: number;
  totalPrice: number;
  budgetCode: string;
}

export interface PurchaseItemDTO {
  id: number;
  name: string;
  type: string;
  dicription: string;
  use: string;
  qty: number;
  unitPrice: number;
  totalPrice: number;
  budgetCode: string;
}
