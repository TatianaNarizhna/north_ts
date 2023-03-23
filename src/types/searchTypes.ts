import { SqlQuery } from './itemTypes';

export type SearchProductsItem = {
  id: number;
  name: string;
  quantPerUnit: string;
  price: number;
  stock: number;
};

export type SearchProductsResponse = {
  data: SearchProductsItem[];
  sqlQueries: SqlQuery[];
};

export type SearchCustomersItem = {
  id: string;
  name: string;
  contact: string;
  title: string;
  phone: string;
};

export type SearchCustomersResponse = {
  data: SearchCustomersItem[];
  sqlQueries: SqlQuery[];
};
