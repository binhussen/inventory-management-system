import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { formatDateFormData } from "../helpers/utils";
import {
  PurchaseHeaderCreationDTO,
  PurchaseHeaderDTO,
  PurchaseHeaderPostGetDTO,
  PurchaseHeaderPutGetDTO,
} from "../models/purchases.model";

@Injectable({
  providedIn: "root",
})
export class PurchasesService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + "/purchases";

  // public getHomePagePurchases(): Observable<homeDTO>{
  //   return this.http.get<homeDTO>(this.apiURL);
  // }

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("page", page.toString());
    params = params.append("recordsPerPage", recordsPerPage.toString());
    return this.http.get<PurchaseHeaderDTO[]>(this.apiURL, {
      observe: "response",
      params,
    });
  }

  public putGet(id: number): Observable<PurchaseHeaderPutGetDTO> {
    return this.http.get<PurchaseHeaderPutGetDTO>(
      `${this.apiURL}/putget/${id}`
    );
  }

  public edit(
    id: number,
    purchaseHeaderCreationDTO: PurchaseHeaderCreationDTO
  ) {
    const formData = this.BuildFormData(purchaseHeaderCreationDTO);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  public getById(id: number): Observable<PurchaseHeaderDTO> {
    return this.http.get<PurchaseHeaderDTO>(`${this.apiURL}/${id}`);
  }

  public filter(values: any): Observable<any> {
    const params = new HttpParams({ fromObject: values });
    return this.http.get<PurchaseHeaderDTO[]>(`${this.apiURL}/filter`, {
      params,
      observe: "response",
    });
  }

  public postGet(): Observable<PurchaseHeaderPostGetDTO> {
    return this.http.get<PurchaseHeaderPostGetDTO>(`${this.apiURL}/postget`);
  }

  public create(
    purchaseCreationDTO: PurchaseHeaderCreationDTO
  ): Observable<number> {
    console.log(purchaseCreationDTO);
    const formData = this.BuildFormData(purchaseCreationDTO);
    return this.http.post<number>(this.apiURL, formData);
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  private BuildFormData(purchase: PurchaseHeaderCreationDTO): FormData {
    const formData = new FormData();

    formData.append("askedBy", purchase.askedBy);
    formData.append("checkedBy", purchase.checkedBy);
    formData.append("approvedBy", purchase.approvedBy);
    if (purchase.date) {
      formData.append("date", formatDateFormData(purchase.date));
    }
    formData.append(
      "purchaseItemsIds",
      JSON.stringify(purchase.purchaseItemsIds)
    );

    return formData;
  }
}
