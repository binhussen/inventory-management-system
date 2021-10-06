export interface userCredentials {
  email: string;
  password: string;
  role: string;
}

export interface authenticationResponse {
  token: string;
  expiration: Date;
}

export interface userDTO {
  id: string;
  email: string;
}
