import axios from 'axios';

const BASE_URL = 'https://northwind-mykyta-tetyana.onrender.com';

export const getSuppliersFirstRender = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/pages/suppliers/1?count=true`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSuppliers = async pageNumber => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/pages/suppliers/${pageNumber}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSupplierInfo = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/item/supplier/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductsFirstRender = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/pages/products/1?count=true`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getProducts = async pageNumber => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/pages/products/${pageNumber}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductInfo = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/item/product/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getOrdersFirstRender = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/pages/orders/1?count=true`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getOrders = async pageNumber => {
  try {
    const { data } = await axios.get(`${BASE_URL}/pages/orders/${pageNumber}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getOrderInfo = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/item/order/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllEmployees = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/pages/employees/1?count=true`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getEmployeeInfo = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/item/employee/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCustomersFirstRender = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/pages/customers/1?count=true`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCustomers = async pageNumber => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/pages/customers/${pageNumber}`,
    );
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCustomerInfo = async id => {
  try {
    const { data } = await axios.get(`${BASE_URL}/item/customer/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSearchInformation = async (value, search) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search/${value}/${search}`);
    return data;
  } catch (error) {
    console.log(error.message);
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
