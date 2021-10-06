import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import {
  PurchaseItemCreationDTO,
  PurchaseItemDTO,
} from "../models/purchase-items.model";

@Injectable({
  providedIn: "root",
})
export class PurchaseItemsService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + "/purchaseItems";

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("page", page.toString());
    params = params.append("recordsPerPage", recordsPerPage.toString());
    return this.http.get<PurchaseItemDTO[]>(this.apiURL, {
      observe: "response",
      params,
    });
  }

  getAll(): Observable<PurchaseItemDTO[]> {
    return this.http.get<PurchaseItemDTO[]>(this.apiURL);
  }

  getById(id: number): Observable<PurchaseItemDTO> {
    return this.http.get<PurchaseItemDTO>(`${this.apiURL}/${id}`);
  }

  create(purchaseItem: PurchaseItemCreationDTO) {
    return this.http.post(this.apiURL, purchaseItem);
  }

  edit(id: number, purchaseItem: PurchaseItemCreationDTO) {
    return this.http.put(`${this.apiURL}/${id}`, purchaseItem);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
