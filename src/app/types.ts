export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  hair: Hair | undefined;
  address: Address | undefined;
  company: Company | undefined;
}

export interface Hair {
  color: string;
}

/** Address details */
export interface Address {
  postalCode: string;
}

/** Company details */
export interface Company {
  department: string;
}

export interface MinMaxAge {
  [department: string]: {
    minAge: number;
    maxAge: number;
  };
}

export interface DepartmentSummary {
  department: { [key: string]: AggregateData };
}
export interface AggregateData {
  male: number;
  female: number;
  ageRange: string;
  hair: { [key: string]: number };
  addressUser: { [key: string]: string };
}
