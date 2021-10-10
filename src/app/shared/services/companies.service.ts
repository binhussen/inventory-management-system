import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { companyCreationDTO, companyDTO } from "../models/companies.model";

@Injectable({
  providedIn: "root",
})
export class CompaniesService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + "companies";

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("page", page.toString());
    params = params.append("recordsPerPage", recordsPerPage.toString());
    return this.http.get<companyDTO[]>(this.apiURL, {
      observe: "response",
      params,
    });
  }

  getAll(): Observable<companyDTO[]> {
    return this.http.get<companyDTO[]>(this.apiURL);
  }

  getById(id: number): Observable<companyDTO> {
    return this.http.get<companyDTO>(`${this.apiURL}/${id}`);
  }

  create(company: companyCreationDTO) {
    return this.http.post(this.apiURL, company);
  }

  edit(id: number, company: companyCreationDTO) {
    return this.http.put(`${this.apiURL}/${id}`, company);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
