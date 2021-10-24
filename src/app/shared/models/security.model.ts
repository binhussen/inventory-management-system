export interface userCredentials {
  username: string;
  password: string;
  role: string;
}

export interface authenticationResponse {
  token: string;
  expiration: Date;
}

export interface userDTO {
  id: string;
  username: string;
}

export interface user {
  id?: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  isEnabled: boolean;
  lockoutEnd?: string;
  accessFailedCount?: boolean;
  roles: Array<string>;
}
