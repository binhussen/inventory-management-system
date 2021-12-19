import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { formatDateFormData } from '../helpers/utils';
import { StoreHeader, StoreItem } from '../models/store.model';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  private apiURL = environment.apiURL + 'storeheaders';
  private uriItem = environment.apiURL + 'storeitems';
  constructor(private http: HttpClient) {}

  createWithItem(store: StoreHeader) {
   store.storeItems  = store.storeItems.map((x) => {
      x.qtyRemain = x.qtyReceived;
      x.totalPrice = x.qtyReceived * x.unitPrice;
      return x;
    });
   return this.http.post(this.apiURL, store);
  }

  getAll(): Observable<StoreHeader[]> {
    return this.http.get<StoreHeader[]>(this.apiURL);
  }

  public getById(id): Observable<StoreHeader> {
    return this.http.get<StoreHeader>(`${this.apiURL}/${id}`);
  }
  public edit(id, storeCreate: StoreHeader) {
    return this.http.put(`${this.apiURL}/${id}`, storeCreate);
  }
  public delete(id) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  public store(id) {
    return this.http.put(
        `${this.apiURL}/store/${id}`, {}
    );
  }
  // items
  getAllItem(id): Observable<StoreItem[]> {
    return this.http.get<StoreItem[]>(this.uriItem + '/' + id + '/storeitems');
  }
  deleteItem(headerId, id) {
    return this.http.delete(`${this.uriItem}/${headerId}/storeitems/${id}`);
  }
  public getItemById(headerId, id) {
    return this.http.get(`${this.uriItem}/${headerId}/storeitems/${id}`);
  }
  public editItem(headerId, id, store: StoreItem) {
    return this.http.put(`${this.uriItem}/${headerId}/storeitems/${id}`, store);
  }
  // all items
  getallList(): Observable<StoreItem[]> {
    return this.http.get<StoreItem[]>(this.uriItem);
  }
}
