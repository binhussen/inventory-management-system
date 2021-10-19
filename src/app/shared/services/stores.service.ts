import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { formatDateFormData } from "../helpers/utils";
import {
  storeCreate,
  StoreHeaderCreationDTO,
  StoreHeaderDTO,
  StoreHeaderPostGetDTO,
  StoreHeaderPutGetDTO,
  storeItem,
} from "../models/stores.model";

@Injectable({
  providedIn: "root",
})
export class StoresService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + "storeheaders";
  private uriItem = environment.apiURL + "storeitems";

  // public getHomePageStores(): Observable<homeDTO>{
  //   return this.http.get<homeDTO>(this.apiURL);
  // }

  // get(page: number, recordsPerPage: number): Observable<any> {
  //   let params = new HttpParams();
  //   params = params.append("page", page.toString());
  //   params = params.append("recordsPerPage", recordsPerPage.toString());

  //   return this.http.get<StoreHeaderDTO[]>(this.apiURL, {
  //     observe: "response",
  //     params,
  //   });
  // }

  // public putGet(id: number): Observable<StoreHeaderPutGetDTO> {
  //   return this.http.get<StoreHeaderPutGetDTO>(`${this.apiURL}/putget/${id}`);
  // }

  // public edit(id: number, storeHeaderCreationDTO: StoreHeaderCreationDTO) {
  //   const formData = this.BuildFormData(storeHeaderCreationDTO);
  //   return this.http.put(`${this.apiURL}/${id}`, formData);
  // }

  // public getById(id: number): Observable<StoreHeaderDTO> {
  //   return this.http.get<StoreHeaderDTO>(`${this.apiURL}/${id}`);
  // }

  // public filter(values: any): Observable<any> {
  //   const params = new HttpParams({ fromObject: values });
  //   return this.http.get<StoreHeaderDTO[]>(`${this.apiURL}/filter`, {
  //     params,
  //     observe: "response",
  //   });
  // }

  // public postGet(): Observable<StoreHeaderPostGetDTO> {
  //   return this.http.get<StoreHeaderPostGetDTO>(`${this.apiURL}/postget`);
  // }

  // public create(storeCreationDTO: StoreHeaderCreationDTO): Observable<number> {
  //   const formData = this.BuildFormData(storeCreationDTO);
  //   return this.http.post<number>(this.apiURL, formData);
  // }

  // public delete(id: number) {
  //   return this.http.delete(`${this.apiURL}/${id}`);
  // }

  // private BuildFormData(store: StoreHeaderCreationDTO): FormData {
  //   const formData = new FormData();

  //   formData.append("supplierId", store.supplierId);
  //   formData.append("reciverId", store.reciverId);
  //   if (store.date) {
  //     formData.append("date", formatDateFormData(store.date));
  //   }
  //   formData.append("graNo", store.graNo);
  //   formData.append("pox", store.pox);
  //   formData.append("checkedBy", store.checkedBy);
  //   formData.append("acceptedBy", store.acceptedBy);
  //   formData.append("inspectedBy", store.inspectedBy);

  //   formData.append("storeItemsIds", JSON.stringify(store.storeItemsIds));

  //   return formData;
  // }

  createWithItem(store: storeCreate) {
    return this.http.post(this.apiURL, store);
  }

  getAll(): Observable<StoreHeaderDTO[]> {
    return this.http.get<StoreHeaderDTO[]>(this.apiURL);
  }

  public getById(id): Observable<StoreHeaderDTO> {
    return this.http.get<StoreHeaderDTO>(`${this.apiURL}/${id}`);
  }
  public edit(id, storeCreate: storeCreate) {
    return this.http.put(`${this.apiURL}/${id}`, storeCreate);
  }
  public delete(id) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  // items
  getAllItem(id): Observable<storeItem[]> {
    return this.http.get<storeItem[]>(this.uriItem + "/" + id + "/storeitems");
  }
  deleteItem(headerId, id) {
    return this.http.delete(`${this.uriItem}/${headerId}/storeitems/${id}`);
  }
  public getItemById(headerId, id) {
    return this.http.get(`${this.uriItem}/${headerId}/storeitems/${id}`);
  }
  public editItem(headerId, id, store: storeItem) {
    return this.http.put(`${this.uriItem}/${headerId}/storeitems/${id}`, store);
  }
}
