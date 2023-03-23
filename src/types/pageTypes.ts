import { SqlQuery } from './itemTypes';

export type OrderRow = {
  TotalProductsPrice: number;
  TotalProductsItems: number;
  TotalProducts: string;
  OrderId: number;
  Shipped: string;
  ShipName: string;
  City: string;
  Country: string;
};

export type OrdersPageResponse = {
  data: OrderRow[];
  totalPages: number;
  currentPage: string;
  sqlQueries: SqlQuery[];
};

export type CustomerRow = {
  id: string;
  company: string;
  name: string;
  title: string;
  city: string;
  country: string;
  avatarLink: string;
};

export type CustomersPageResponse = {
  data: CustomerRow[];
  totalPages: number;
  currentPage: string;
  sqlQueries: SqlQuery[];
};

export type ProductsRow = {
  id: number;
  name: string;
  qt: string;
  price: number;
  stock: number;
  orders: number;
};

export type ProductsPageResponse = {
  data: ProductsRow[];
  totalPages: number;
  currentPage: string;
  sqlQueries: SqlQuery[];
};

export type SuppliersRow = {
  id: number;
  companyName: string;
  name: string;
  title: string;
  city: string;
  country: string;
  avatarLink: string;
};

export type SuppliersPageResponse = {
  data: SuppliersRow[];
  totalPages: number;
  currentPage: string;
  sqlQueries: SqlQuery[];
};

export type EmployeesRow = {
  id: number;
  name: string;
  phone: string;
  title: string;
  city: string;
  country: string;
  avatarLink: string;
};

export type EmployeesPageResponse = {
  data: EmployeesRow[];
  totalPages: number;
  currentPage: string;
  sqlQueries: SqlQuery[];
};
