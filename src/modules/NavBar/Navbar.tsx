import React from 'react';
import { NavLink } from "react-router-dom";
import Icons from '../../svgFile/symbol-defs.svg';
import s from "./navbar.module.css";

const Navbar = () => {
return (
 <aside className={s.menu}>
    <div className={s.title}><p><span className={s.weight}>Northwind</span> Traders</p></div>
    <p className={s.block_title}>GENERAL</p>
    <NavLink to="/" className={s.link}>
        <span className={s.svg_Style}>
             <svg width={25} height={25} >
                  <use xlinkHref={`${Icons}#icon-home`} ></use>
              </svg>
        </span>
        <span className={s.nav_page}>Home</span></NavLink>
    <NavLink to="/dash" className={s.link}>
        <span className={s.svg_Style}>
              <svg width={20} height={20} >
                  <use xlinkHref={`${Icons}#icon-display`} ></use>
              </svg>
        </span>
        <span className={s.nav_page}>Dashboard</span>
    </NavLink>
    <p className={s.block_title}>BACKOFFICE</p>
    <NavLink to="/suppliers" className={s.link}>
        <span className={s.svg_Style}>
            <svg width={20} height={20} >
                  <use xlinkHref={`${Icons}#icon-inventory`} ></use>
            </svg>
        </span>
        <span className={s.nav_page}>Suppliers</span>
    </NavLink>
    <NavLink to="/products" className={s.link}>
        <span className={s.svg_Style}>
             <svg width={20} height={20} >
                  <use xlinkHref={`${Icons}#icon-cart-arrow-down`} ></use>
             </svg>
        </span>
        <span className={s.nav_page}>Products</span>
    </NavLink>
    <NavLink to="/orders" className={s.link}>
        <span className={s.svg_Style}>
             <svg width={20} height={20} >
                  <use xlinkHref={`${Icons}#icon-shopping-cart`} ></use>
             </svg>
        </span>
        <span className={s.nav_page}>Orders</span>
    </NavLink>
    <NavLink to="/employees" className={s.link}>
        <span className={s.svg_Style}>
             <svg width={20} height={20} >
                  <use xlinkHref={`${Icons}#icon-badge`} ></use>
             </svg>
        </span>
        <span className={s.nav_page}>Employees</span>
    </NavLink>
    <NavLink to="/customers" className={s.link}>
        <span className={s.svg_Style}>
             <svg width={20} height={20} >
                  <use xlinkHref={`${Icons}#icon-users`} ></use>
             </svg>
        </span>
        <span>Customers</span>
    </NavLink>
    <NavLink to="/search" className={s.link}>
         <span className={s.svg_Style}>
             <svg width={20} height={20} >
                  <use xlinkHref={`${Icons}#icon-search`} ></use>
             </svg>
         </span>
        <span>Search</span>
    </NavLink>
</aside>
)
}

export default Navbar