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
  fullAddress :string;
  website: string;
  description: string;
}
