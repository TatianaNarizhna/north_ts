import React from 'react';
import { Link } from "react-router-dom";
import Section from "../Section/Section";
import Ballot from '../../svgFile/symbol-defs.svg';
import GoBackButton from '../GoBackButton/GoBackButton';
import { ProductsInOrder } from '../../types/itemTypes';
import { OrderItem } from '../../types/itemTypes';

import s from './OrderDetails.module.css';

interface IOrderProps {
    productsInfo: ProductsInOrder[];
    details: OrderItem[];
}

const OrderDetails: React.FC<IOrderProps> = ({ productsInfo, details }) => 

{
 let obj = details[0]
    const {CustomerId, ShipName, TotalProducts, TotalProductsItems, TotalProductsPrice, TotalProductsDiscount, CompanyShipper, Freight, OrderDate, RequiredDate, ShippedDate, ShipCity, ShipRegion, PostalCode, ShipCountry } = obj || {};

    // const correctData = (shipped: string | undefined | null) => {
    //     if(typeof shipped !== 'undefined' && shipped !== null) {
    //         let shippedCorrection = shipped.split(" ");
    //         let firstElement = shippedCorrection[0];
    //         return firstElement;
    //     }
    //   }

    // const correctData = (shipped: string | undefined | null) => {
    //     if(typeof shipped !== 'undefined' && shipped !== null) {
    //         let shippedCorrection = shipped.split(" ");
    //         let firstElement = shippedCorrection[0];
    //         return firstElement;
    //     }
    //     return "";
    // }

    //   let shippedCorrection = OrderDate.split(" ");
    //   console.log(shippedCorrection[0])

    const correctData = (shipped: string) => {
        let shippedCorrection = shipped.split(" ");
        let firstElement = shippedCorrection[0];
        return firstElement;
    
      }
 
     return (
         <>
          <div>
             <header className={s.header}>
              <div className={s.svg_container}> 
                <svg width={25} height={25} >
                  <use xlinkHref={`${Ballot}#icon-ballot`} ></use>
                </svg>
               </div>
                <p className={s.card_header}>Order information</p>
             </header>

             {obj &&     <div className={s.card_content}>
                 <div className={s.grid}>
                     <ul>
                         <li  className={s.list_field}>
                             <label  className={s.label}>Customer Id</label>
                             <p  className={s.name}><Link className={s.link} 
                             to={`/customer/${CustomerId}`}>{CustomerId}</Link>
                             </p>
                         </li>
                         <li className={s.list_field}>
                             <label className={s.label}>Ship Name</label>
                             <p className={s.name}>{ShipName}</p>
                         </li>
                         <li className={s.list_field}>
                             <label className={s.label}>Total Products</label>
                             <p className={s.name}>{TotalProducts}</p>
                         </li>
                         <li className={s.list_field}>
                             <label className={s.label}>Total Quantity</label>
                             <p className={s.name}>{TotalProductsItems}</p>
                         </li>
                         <li className={s.list_field}>
                             <label className={s.label}>Total Price</label>
                             <p className={s.name}>${TotalProductsPrice}</p>
                         </li>
                         <li className={s.list_field}>
                             <label className={s.label}>Total Discount</label>
                             <p className={s.name}>${TotalProductsDiscount}</p>
                         </li>
                         <li className={s.list_field}>
                             <label className={s.label}>Ship Via</label>
                             <p className={s.name}>{CompanyShipper}</p>
                         </li>
                         <li className={s.list_field}>
                             <label className={s.label}>Freight</label>
                             <p className={s.name}>${Freight}</p>
                         </li>
                     </ul>
 
                     <ul>
                      <li className={s.list_field}>
                         <label className={s.label}>Order Date</label>
                          <p className={s.name}>{correctData(OrderDate)}</p>
                      </li>
                      <li className={s.list_field}>
                         <label className={s.label}>Required Date</label>
                          <p className={s.name}>{correctData(RequiredDate)}</p>
                      </li>
                      <li className={s.list_field}>
                         <label className={s.label}>Shipped Date</label>
                          <p className={s.name}>{correctData(ShippedDate)}</p>
                      </li>
                      <li className={s.list_field}>
                         <label className={s.label}>Ship City</label>
                          <p className={s.name}>{ShipCity}</p>
                      </li>
                      <li className={s.list_field}>
                         <label className={s.label}>Ship Region</label>
                          <p className={s.name}>{ShipRegion}</p>
                      </li>
                      <li className={s.list_field}>
                         <label className={s.label}>Ship Postal Code</label>
                          <p className={s.name}>{PostalCode}</p>
                      </li>
                      <li className={s.list_field}>
                         <label className={s.label}>Ship Country</label>
                          <p className={s.name}>{ShipCountry}</p>
                      </li>
 
                     </ul>
                 </div>

             </div>}
 

                    <div>
                        <header className={s.bottom_title}>
                            <p>Products in Order</p>
                        </header>
                     </div>

                     <div>
          <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Order Price</th>
                    <th>Total Price</th>
                    <th>Discount</th>
                </tr>
            </thead>
            <tbody>
                {productsInfo.map(({ProductId, ProductName, Quantity, OrderPrice, TotalPrice, Discount}, i) => (
                    <>
                    <tr key={ProductId} className={s.tr_wide}>
                        <td><Link className={s.link} to={`/product/${ProductId}`}>{ProductName}</Link></td>
                        <td>{Quantity}</td>
                        <td>${OrderPrice}</td>
                        <td>${Math.round(TotalPrice)}</td>
                        <td>{Discount}%</td> 
                    </tr>

                    <tr key={i} className={s.tr_media}>
                        <td><span className={s.span_media}>Product</span><Link className={s.link} to={`/product/${ProductId}`}>{ProductName}</Link></td>
                        <td><span className={s.span_media}>Quantity</span>{Quantity}</td>
                        <td><span className={s.span_media}>Order Price</span>${OrderPrice}</td>
                        <td><span className={s.span_media}>Total Price</span>${TotalPrice}</td>
                        <td><span className={s.span_media}>Discount</span>{Discount}%</td> 
                    </tr>

                    </>
                ))}
            </tbody>
          </table>
        </div>

                     
         </div>
           <GoBackButton path={"/orders"}/>
         </>
     )
 }
 
 export default OrderDetails;
 