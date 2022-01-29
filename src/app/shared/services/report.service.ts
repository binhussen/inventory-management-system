import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { report } from 'process';
import { Observable } from 'rxjs';
import { Report } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiURL = environment.apiURL + 'reports';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiURL);
  }

  public getById(id): Observable<Report> {
    return this.http.get<Report>(`${this.apiURL}/${id}`);
  }
  public edit(id, report: Report) {
    return this.http.put(`${this.apiURL}/${id}`, report);
  }
  public delete(id) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  public create(report: Report): Observable<Report[]> {
    return this.http.post<Report[]>(this.apiURL, report);
  }
}

