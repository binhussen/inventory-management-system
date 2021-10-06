import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import {
  FinanceItemCreationDTO,
  FinanceItemDTO,
} from "../models/finance-items.model";

@Injectable({
  providedIn: "root",
})
export class FinanceItemsService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + "/financeitems";

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("page", page.toString());
    params = params.append("recordsPerPage", recordsPerPage.toString());
    return this.http.get<FinanceItemDTO[]>(this.apiURL, {
      observe: "response",
      params,
    });
  }

  getAll(): Observable<FinanceItemDTO[]> {
    return this.http.get<FinanceItemDTO[]>(this.apiURL);
  }

  getById(id: number): Observable<FinanceItemDTO> {
    return this.http.get<FinanceItemDTO>(`${this.apiURL}/${id}`);
  }

  create(financeItem: FinanceItemCreationDTO) {
    return this.http.post(this.apiURL, financeItem);
  }

  edit(id: number, financeItem: FinanceItemCreationDTO) {
    return this.http.put(`${this.apiURL}/${id}`, financeItem);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
