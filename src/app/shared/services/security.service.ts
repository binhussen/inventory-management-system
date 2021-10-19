import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { Role } from "../models/role.model";
import {
  authenticationResponse,
  userCredentials,
  userDTO,
} from "../models/security.model";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class SecurityService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService
  ) {}

  private apiURL = environment.apiURL + "authentication";
  private readonly tokenKey: string = "token";
  private readonly expirationTokenKey: string = "token-expiration";
  private readonly roleField = "role";

  getUsers(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append("page", page.toString());
    params = params.append("recordsPerPage", recordsPerPage.toString());
    return this.http.get<userDTO[]>(`${this.apiURL}/listusers`, {
      observe: "response",
      params,
    });
  }

  makeAdmin(userId: string) {
    const headers = new HttpHeaders("Content-Type: application/json");
    return this.http.post(`${this.apiURL}/makeadmin`, JSON.stringify(userId), {
      headers,
    });
  }

  changeRole(role: string[]) {
    const headers = new HttpHeaders("Content-Type: application/json");
    return this.http.post(
      `${this.apiURL}/changeRole`,
      role,

      {
        headers,
      }
    );
  }

  removeAdmin(userId: string) {
    const headers = new HttpHeaders("Content-Type: application/json");
    return this.http.post(
      `${this.apiURL}/removeadmin`,
      JSON.stringify(userId),
      { headers }
    );
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
    return dataToken[field];
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
    this.router.navigateByUrl("sessions/signin");
  }

  getRole(): string {
    const token = localStorage.getItem(this.tokenKey);
    // return this.getFieldFromJWT(this.roleField);
    return this.jwtHelper.decodeToken(token);
  }

  register(
    userCredentials: userCredentials
  ): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiURL + "/create",
      userCredentials
    );
  }

  login(userCredentials: userCredentials): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiURL + "/login",
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
