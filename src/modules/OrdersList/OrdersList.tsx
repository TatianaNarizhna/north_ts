import React from 'react';
import { Link } from "react-router-dom";
import Redo from "../../svgFile/symbol-defs.svg";
import { OrderRow } from '../../types/pageTypes';
import s from './OrdersList.module.css';

interface IOrdersProps {
  orders: OrderRow[];
}


const OrdersList: React.FC<IOrdersProps> = ({ orders }) => {

  const correctData = (shipped: string) => {
    let shippedCorrection = shipped.split(" ");
    let firstElement = shippedCorrection[0];
    return firstElement;

  }

    return (
          <div className={s.border}>
            <header className={s.header}>
              <p className={s.card_header}>Orders</p>
              <div className={s.svg_container}>
              <svg width={22} height={22} >
              <use xlinkHref={`${Redo}#icon-redo`} ></use>
            </svg>
          </div>
        </header>
        <div>
          <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Total Price</th>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Shipped</th>
                    <th>Ship Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(({OrderId, TotalProductsPrice, TotalProducts, TotalProductsItems, Shipped, ShipName, City, Country}, i) => 
                  (
                    <>
                    <tr key={OrderId} className={s.tr_wide} style={{backgroundColor: i % 2 === 0 ? 'transparent' : 'var(--title-white-color)'}}>
                    <td><Link className={s.link} to={`/order/${OrderId}`}>{OrderId}</Link></td>
                    <td>{TotalProductsPrice}</td>
                    <td>{TotalProducts}</td>
                    <td>{TotalProductsItems}</td>
                    <td>{ correctData(Shipped)}</td>
                    <td>{ShipName}</td>
                    <td>{City}</td>
                    <td>{Country}</td>
                   </tr>


                   <tr key={ShipName} className={s.tr_media}>
                    <td>
                      <span className={s.span_media}>Id</span>
                      <Link className={s.link} to={`/order/${OrderId}`}>{OrderId}</Link></td>
                    <td><span className={s.span_media}>Total Price</span>{TotalProductsPrice}</td>
                    <td><span className={s.span_media}>Products</span>{TotalProducts}</td>
                    <td><span className={s.span_media}>Quantity</span>{TotalProductsItems}</td>
                    <td><span className={s.span_media}>Shipped</span>{ correctData(Shipped)}</td>
                    <td><span className={s.span_media}>Ship Name</span>{ShipName}</td>
                    <td><span className={s.span_media}>City</span>{City}</td>
                    <td><span className={s.span_media}>Country</span>{Country}</td>
                   </tr>
                   </>
                  )
                )}
            </tbody>
          </table>
        </div>
     </div>
    )
};

export default OrdersList;