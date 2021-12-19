import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  RequestHeader, RequestItem,
} from '../models/request.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private apiURL = environment.apiURL + 'requestheaders';
  private uriItem = environment.apiURL + 'requestitems';
  constructor(private http: HttpClient) {}

  createWithItem(request: RequestHeader) {
    return this.http.post(this.apiURL, request);
  }

  getAll(): Observable<RequestHeader[]> {
    return this.http.get<RequestHeader[]>(this.apiURL);
  }

  public getById(id): Observable<RequestHeader> {
    return this.http.get<RequestHeader>(`${this.apiURL}/${id}`);
  }
  public edit(id, request: RequestHeader) {
    return this.http.put(`${this.apiURL}/${id}`, request);
  }
  public delete(id) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  // items
  getAllItem(id): Observable<RequestItem[]> {
    return this.http.get<RequestItem[]>(
      this.uriItem + '/' + id + '/requestitems'
    );
  }
  deleteItem(headerId, id) {
    return this.http.delete(`${this.uriItem}/${headerId}/requestitems/${id}`);
  }
  public getItemById(headerId, id) {
    return this.http.get(`${this.uriItem}/${headerId}/requestitems/${id}`);
  }
  public editItem(headerId, id, request: RequestItem) {
    return this.http.put(
      `${this.uriItem}/${headerId}/requestitems/${id}`,
      request
    );
  }
  // budget
  addBudget(id, budgetCode) {
    return this.http.put(`${this.apiURL}/budget/${id}`, budgetCode);
  }
  reject(id) {
    var reject = {};
    return this.http.put(`${this.apiURL}/rejectbudget/${id}`, reject);
  }

  approved(headid, id, qty) {
    return this.http.put(
      `${this.uriItem}/${headid}/requestitems/approve/${id}`,
      qty
    );
  }
  rejected(headid, id) {
    var reject = {};
    return this.http.put(
      `${this.uriItem}/${headid}/requestitems/reject/${id}`,
      reject
    );
  }
  distribute(headid, id, storeid) {
    return this.http.put(
      `${this.uriItem}/${headid}/requestitems/distribute/${id}`,
      storeid
    );
  }
  buy(headid, id) {
    var buy = {};
    return this.http.put(
      `${this.uriItem}/${headid}/requestitems/buy/${id}`, buy
    );
  }
  notBuy(headid, id) {
    var buy = {};
    return this.http.put(
      `${this.uriItem}/${headid}/requestitems/notbuy/${id}`,
      buy
    );
  }
}
