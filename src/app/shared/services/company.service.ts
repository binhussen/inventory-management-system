import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { Company, Employee } from "../models/company.model";

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  private apiURL = environment.apiURL + "companies";
  private uriItem = environment.apiURL + "employees";

  constructor(private http: HttpClient) {}

  createWithEmployee(company: Company) {
    return this.http.post(this.apiURL, company);
  }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiURL);
  }

  public getById(id): Observable<Company> {
    return this.http.get<Company>(`${this.apiURL}/${id}`);
  }
  public edit(id, company: Company) {
    return this.http.put(`${this.apiURL}/${id}`, company);
  }
  public delete(id) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  // items
  getAllEmployee(id): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiURL + "/" + id + "/employees");
  }
  deleteEmployee(headerId, id) {
    return this.http.delete(`${this.apiURL}/${headerId}/employees/${id}`);
  }
  public getEmployeeById(headerId, id) {
    return this.http.get(`${this.apiURL}/${headerId}/employees/${id}`);
  }
  public editEmployee(headerId, id, employee: Employee) {
    return this.http.put(
      `${this.apiURL}/${headerId}/employees/${id}`,
      employee
    );
  }
  //employees
  createEmp(employee: Employee): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.uriItem, employee);
  }
  getAllEmp(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.uriItem);
  }
  deleteEmp(id) {
    return this.http.delete(`${this.uriItem}/${id}`);
  }
  public getEmpById(id) {
    return this.http.get<Employee>(`${this.uriItem}/${id}`);
  }
  public editEmp(id, employee: Employee) {
    return this.http.put(`${this.uriItem}/${id}`, employee);
  }
}
