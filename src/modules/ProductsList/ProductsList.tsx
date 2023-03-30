import React from 'react';
import { Link } from "react-router-dom";
import Redo from "../../svgFile/symbol-defs.svg";
import { ProductsRow } from '../../types/pageTypes';
import s from './ProductsList.module.css';

interface IProdProps {
  products: ProductsRow[];
}

const ProductsList:React.FC<IProdProps> = ({ products }) => {
    return (
          <div className={s.border}>
            <header className={s.header}>
              <p className={s.card_header}>Products</p>
              <div className={s.svg_container}>
              <svg width={22} height={22} >
              <use xlinkHref={`${Redo}#icon-redo`} ></use>
            </svg>
          </div>
        </header>
        <div className={s.retreat}>
          <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Qt per unit</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Orders</th>
                </tr>
            </thead>
            <tbody>
         
                {products.map(({id, name, qt, price, stock, orders}, i) => (
                  <>
                    <tr key={id} className={s.tr_wide} style={{backgroundColor: i % 2 === 0 ? 'transparent' : 'var(--title-white-color)'}} >
                        <td><Link className={s.link} to={`/product/${id}`}>{name}</Link></td>
                        <td>{qt}</td>
                        <td>${price}</td>
                        <td>{stock}</td>
                        <td>{orders}</td>
                    </tr>

                    <tr key={i} className={s.tr_media}>
                        <td className={s.border}>
                          <span className={s.span_media}>Product</span>
                          <Link className={s.link} to={`/product/${id}`}>{name}</Link></td>
                        <td>
                          <span className={s.span_media}>Qpu</span>
                          {qt}</td>
                        <td>
                          <span className={s.span_media}>Price</span>
                          ${price}</td>
                        <td>
                          <span className={s.span_media}>Stock</span>
                          {stock}</td>
                        <td>
                          <span className={s.span_media}>Orders</span>
                          {orders}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
     </div>
    )
};

export default ProductsList;