import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import {
  FinanceHeaderCreationDTO,
  FinanceHeaderDTO,
  FinanceHeaderPostGetDTO,
  FinanceHeaderPutGetDTO,
} from "../models/finances.model";
import { RequestCreate } from "../models/requests.model";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + "requestheaders";

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("page", page.toString());
    params = params.append("recordsPerPage", recordsPerPage.toString());
    return this.http.get<FinanceHeaderDTO[]>(this.apiURL, {
      observe: "response",
      params,
    });
  }

  public putGet(id: number): Observable<FinanceHeaderPutGetDTO> {
    return this.http.get<FinanceHeaderPutGetDTO>(`${this.apiURL}/putget/${id}`);
  }

  public edit(id: number, financeHeaderCreationDTO: FinanceHeaderCreationDTO) {
    const formData = this.BuildFormData(financeHeaderCreationDTO);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  public getById(id: number): Observable<FinanceHeaderDTO> {
    return this.http.get<FinanceHeaderDTO>(`${this.apiURL}/${id}`);
  }

  public filter(values: any): Observable<any> {
    const params = new HttpParams({ fromObject: values });
    return this.http.get<FinanceHeaderDTO[]>(`${this.apiURL}/filter`, {
      params,
      observe: "response",
    });
  }

  public postGet(): Observable<FinanceHeaderPostGetDTO> {
    return this.http.get<FinanceHeaderPostGetDTO>(`${this.apiURL}/postget`);
  }

  public create(
    financeCreationDTO: FinanceHeaderCreationDTO
  ): Observable<number> {
    console.log(financeCreationDTO);
    const formData = this.BuildFormData(financeCreationDTO);
    return this.http.post<number>(this.apiURL, formData);
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  private BuildFormData(finance: FinanceHeaderCreationDTO): FormData {
    const formData = new FormData();
    formData.append("vendorId", finance.vendorId);
    formData.append("shipId", finance.shipId);
    formData.append("termsofPayment", finance.termsofPayment);
    formData.append("termsOfDeliery", finance.termsOfDeliery);
    formData.append("preparedBy", finance.preparedBy);
    formData.append("checkedBy", finance.checkedBy);
    formData.append("approvedBy", finance.approvedBy);

    formData.append("financeItemsIds", JSON.stringify(finance.financeItemsIds));

    return formData;
  }

  createWithItem(request: RequestCreate) {
    return this.http.post(this.apiURL, request);
  }
}
