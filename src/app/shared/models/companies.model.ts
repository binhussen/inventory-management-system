import { employeeCreationDTO, employeeDTO } from "./employees.model";

export interface companyCreationDTO {
  name: string;
  phoneNo: string;
  email: string;
  fax: string;
  country: string;
  address: string;
  website: string;
  description: string;
}

export interface companyDTO {
  id: number;
  name: string;
  phoneNo: string;
  email: string;
  fax: string;
  fullAddress: string;
  website: string;
  description: string;
}

export interface companyWithEmployee {
  name: string;
  phoneNo: string;
  email: string;
  fax: string;
  country: string;
  address: string;
  website: string;
  description: string;
  employees: Array<employeeCreationDTO>;
}
