import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import {
  StoreItemCreationDTO,
  StoreItemDTO,
} from "../models/store-items.model";
import { storeItem } from "../models/stores.model";

@Injectable({
  providedIn: "root",
})
export class StoreItemsService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + "storeitems";

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("page", page.toString());
    params = params.append("recordsPerPage", recordsPerPage.toString());
    return this.http.get<StoreItemDTO[]>(this.apiURL, {
      observe: "response",
      params,
    });
  }

  getAllItem(id): Observable<storeItem> {
    return this.http.get<storeItem>(this.apiURL + "/" + id + "/storeitems");
  }

  getById(id: number): Observable<StoreItemDTO> {
    return this.http.get<StoreItemDTO>(`${this.apiURL}/${id}`);
  }

  create(storeItem: StoreItemCreationDTO) {
    return this.http.post(this.apiURL, storeItem);
  }

  edit(id: number, storeItem: StoreItemCreationDTO) {
    return this.http.put(`${this.apiURL}/${id}`, storeItem);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
