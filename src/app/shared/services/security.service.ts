import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { Role } from "../models/role.model";
import {
  authenticationResponse,
  user,
  userCredentials,
  userDTO,
} from "../models/security.model";
// import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class SecurityService {
  constructor(
    private http: HttpClient,
    private router: Router // private jwtHelper: JwtHelperService
  ) {}

  private apiURL = environment.apiURL;

  private readonly tokenKey: string = "token";
  private readonly expirationTokenKey: string = "token-expiration";
  private readonly roleField = "role";
  private readonly userName = "name";

  getUsers(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("page", page.toString());
    params = params.append("recordsPerPage", recordsPerPage.toString());
    return this.http.get<user[]>(`${this.apiURL}users`, {
      observe: "response",
      params,
    });
  }

  changeRole(id: string, role: string[]) {
    const headers = new HttpHeaders("Content-Type: application/json");
    console.log(role);
    return this.http.put(`${this.apiURL}users/role/${id}`, role, {
      headers,
    });
  }

  changeStatus(id: string, status: boolean) {
    return this.http.put(`${this.apiURL}users/lock/${id}`, status);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);

    if (!token) {
      return false;
    }

    const expiration = localStorage.getItem(this.expirationTokenKey);
    const expirationDate = new Date(expiration);

    if (expirationDate <= new Date()) {
      this.logout();
      return false;
    }

    return true;
  }

  getFieldFromJWT(field: string): string {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return "";
    }
    const dataToken = JSON.parse(atob(token.split(".")[1]));
    var claim = "http://schemas.microsoft.com/ws/2008/06/identity/claims/";
    return dataToken[claim + field];
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
    this.router.navigateByUrl("sessions/signin");
  }

  getRole(): string {
    return this.getFieldFromJWT(this.roleField);
  }

  getUserName(): string {
    return this.getFieldFromJWT(this.userName);
  }

  register(user: user): Observable<user> {
    console.log(user);
    return this.http.post<user>(this.apiURL + "authentication", user);
  }

  login(userCredentials: userCredentials): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiURL + "authentication/login",
      userCredentials
    );
  }

  saveToken(authenticationResponse: authenticationResponse) {
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(
      this.expirationTokenKey,
      authenticationResponse.expiration.toString()
    );
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
