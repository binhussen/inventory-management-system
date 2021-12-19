export interface Company {
  id?: string;
  name?: string;
  phoneNo?: string;
  email?: string;
  fax?: string;
  country?: string;
  address?: string;
  website?: string;
  description?: string;
  createdByUser?: string;
  createdDate?: string;
  modifiedByUser?: string;
  modifiedDate?: string;
  employees?: Array<Employee>;
}

export interface Employee {
  id?: string;
  name?: string;
  age?: number;
  phoneNo?: string;
  email?: string;
  position?: string;
  department?: string;
  createdByUser?: string;
  createdDate?: string;
  modifiedByUser?: string;
  modifiedDate?: string;
}
