import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { employeeCreationDTO, employeeDTO } from '../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + "companies/4a829fbc-2194-4c8a-010d-08d98bdfd1c9"+"/employees";

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("page", page.toString());
    params = params.append("recordsPerPage", recordsPerPage.toString());
    return this.http.get<employeeDTO[]>(this.apiURL, {
      observe: "response",
      params,
    });
  }

  getAll(): Observable<employeeDTO[]> {
    return this.http.get<employeeDTO[]>(this.apiURL);
  }

  getById(id: number): Observable<employeeDTO> {
    return this.http.get<employeeDTO>(`${this.apiURL}/${id}`);
  }

  create(employee: employeeCreationDTO) {
    return this.http.post(this.apiURL, employee);
  }

  edit(id: number, employee: employeeCreationDTO) {
    return this.http.put(`${this.apiURL}/${id}`, employee);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
