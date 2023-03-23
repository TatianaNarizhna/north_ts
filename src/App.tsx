import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
import Nav from './modules/Nav/Nav';
import Navbar from './modules/NavBar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

export const MyContext = createContext(null);


const App:React.FC = () => {
  const [dash, setDash] = useState([]);


  return (
   <BrowserRouter>
      <Nav/>
      <Navbar/>

      <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/dash" element={<DashboardPage dash={dash} />} />

      </Routes>
   </BrowserRouter>
  );
}

export default App;
