import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Nav from './modules/Nav/Nav';
import Navbar from './modules/NavBar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import SuppliersPage from './pages/SuppliersPage/SuppliersPage';
import SupplierDetailsPage from './pages/SupplierDetailsPage/SupplierDetailsPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductsDetailsPage from './pages/ProductsDetailsPage/ProductsDetailsPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import OrderDetailsPage from './pages/OrdersDetailsPage/OrdersDetailsPage';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage/EmployeeDetailsPage';
import CustomersPage from './pages/CustomersPage/CustomersPage';
import CustomerDetailsPage from './pages/CustomerDetailsPage/CustomerDetailsPage';
import SearchPage from './pages/SearchPage/SearchPage';


import { SqlQuery } from './types/itemTypes';

type MycontextValue = {
  dash: SqlQuery[][];
  handleDashChange:  ( newState: any) => void;
}

export const MyContext = createContext<MycontextValue>({
  dash: [],
  handleDashChange: () => {},
});

const App:React.FC = () => {
  const [dash, setDash] = useState<SqlQuery[][]>([]);

  const handleDashChange = ( newState: SqlQuery[][]) => {
      setDash(newState);
  };


  return (
   <BrowserRouter>
      <Nav/>
      <Navbar/>
      <MyContext.Provider value = {{ dash,  handleDashChange }}>

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dash" element={<DashboardPage dash={dash} />} />

      <Route path="/suppliers" element={<SuppliersPage />} />
      <Route path="/supplier/:id" element={<SupplierDetailsPage />} />

      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductsDetailsPage />} />

      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/order/:id" element={<OrderDetailsPage />} />

      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/employee/:id" element={<EmployeeDetailsPage />} />

      <Route path="/customers" element={<CustomersPage />} />
      <Route path="/customer/:id" element={<CustomerDetailsPage />} />

      <Route path="/search" element={<SearchPage />} />

      </Routes>
      </MyContext.Provider>
   </BrowserRouter>
  );
}

export default App;
