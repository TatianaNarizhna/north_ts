import axios from 'axios';
import { SuppliersPageResponse } from '../types/pageTypes';
import { SupplierItemResponse } from '../types/itemTypes';
import { ProductsPageResponse } from '../types/pageTypes';
import { ProductItemResponse } from '../types/itemTypes';
import { OrdersPageResponse } from '../types/pageTypes';
import { OrderItemResponse } from '../types/itemTypes';
import { EmployeesPageResponse } from '../types/pageTypes';
import { EmployeeItemResponse } from '../types/itemTypes';
import { CustomersPageResponse } from '../types/pageTypes';
import { CustomerItemResponse } from '../types/itemTypes';

const BASE_URL = 'https://northwind-mykyta-tetyana.onrender.com';

export const getSuppliersFirstRender = async () => {
  try {
    const { data } = await axios.get<SuppliersPageResponse>(
      `${BASE_URL}/pages/suppliers/1?count=true`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSuppliers = async (
  pageNumber: number,
): Promise<SuppliersPageResponse | undefined> => {
  try {
    const { data } = await axios.get<SuppliersPageResponse>(
      `${BASE_URL}/pages/suppliers/${pageNumber}`,
    );
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getSupplierInfo = async (id: string) => {
  try {
    const { data } = await axios.get<SupplierItemResponse>(
      `${BASE_URL}/item/supplier/${id}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsFirstRender = async () => {
  try {
    const { data } = await axios.get<ProductsPageResponse>(
      `${BASE_URL}/pages/products/1?count=true`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (pageNumber: number) => {
  try {
    const { data } = await axios.get<ProductsPageResponse>(
      `${BASE_URL}/pages/products/${pageNumber}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductInfo = async (id: string) => {
  try {
    const { data } = await axios.get<ProductItemResponse>(
      `${BASE_URL}/item/product/${id}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrdersFirstRender = async () => {
  try {
    const { data } = await axios.get<OrdersPageResponse>(
      `${BASE_URL}/pages/orders/1?count=true`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async (pageNumber: number) => {
  try {
    const { data } = await axios.get<OrdersPageResponse>(
      `${BASE_URL}/pages/orders/${pageNumber}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderInfo = async (id: string) => {
  try {
    const { data } = await axios.get<OrderItemResponse>(
      `${BASE_URL}/item/order/${id}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllEmployees = async () => {
  try {
    const { data } = await axios.get<EmployeesPageResponse>(
      `${BASE_URL}/pages/employees/1?count=true`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getEmployeeInfo = async (id: string) => {
  try {
    const { data } = await axios.get<EmployeeItemResponse>(
      `${BASE_URL}/item/employee/${id}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomersFirstRender = async () => {
  try {
    const { data } = await axios.get<CustomersPageResponse>(
      `${BASE_URL}/pages/customers/1?count=true`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomers = async (pageNumber: number) => {
  try {
    const { data } = await axios.get<CustomersPageResponse>(
      `${BASE_URL}/pages/customers/${pageNumber}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomerInfo = async (id: string) => {
  try {
    const { data } = await axios.get<CustomerItemResponse>(
      `${BASE_URL}/item/customer/${id}`,
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchInformation = async (value: string, search: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search/${value}/${search}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getCustomersSearch = async search => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/search/customers/${search}`);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
