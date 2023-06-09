import React from 'react';
import { Link } from "react-router-dom";
import Section from "../Section/Section";
import Ballot from '../../svgFile/symbol-defs.svg';
import GoBackButton from '../GoBackButton/GoBackButton';
import { ProductItem } from '../../types/itemTypes';
import s from './ProductsDetails.module.css';

interface IProdProps {
    details: ProductItem[];
}

const ProductsDetails: React.FC<IProdProps> = ({ details}) => {
    let obj = details[0];
   const {productName, supplier, qtyPerUnit, unitPrice, unitsInStock, unitsInOrder,reorderLevel, discontinued, supplierId } = obj || {};

    return (
        <>
         <div>
           <header className={s.header}>
             <div className={s.svg_container}> 
               <svg width={25} height={25} >
                 <use xlinkHref={`${Ballot}#icon-ballot`} ></use>
               </svg>
              </div>
               <p className={s.card_header}>Product information</p>
            </header>

            <div className={s.card_content}>
                <div className={s.grid}>
                    <ul>
                        <li  className={s.list_field}>
                            <label  className={s.label}>Product Name</label>
                            <p  className={s.name}>{productName}</p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>Supplier</label>
                            <p className={s.name}>
                                <Link className={s.link}  to={`/supplier/${supplierId}`} >{supplier}</Link>
                               </p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>Quantity Per Unit</label>
                            <p className={s.name}>{qtyPerUnit}</p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>Unit Price</label>
                            <p className={s.name}>${unitPrice}</p>
                        </li>
                    </ul>

                    <ul>
                     <li className={s.list_field}>
                        <label className={s.label}>Units In Stock</label>
                         <p className={s.name}>{unitsInStock}</p>
                     </li>
                     <li className={s.list_field}>
                        <label className={s.label}>Units In Order</label>
                         <p className={s.name}>{unitsInOrder}</p>
                     </li>
                     <li className={s.list_field}>
                        <label className={s.label}>Reorder Level</label>
                         <p className={s.name}>{reorderLevel}</p>
                     </li>
                     <li className={s.list_field}>
                        <label className={s.label}>Discontinued</label>
                         <p className={s.name}>{discontinued}</p>
                     </li>

                    </ul>

                </div>
            </div>
          </div>
          <GoBackButton path={"/products"}/>
        </>
    
     
    
    )

}

export default ProductsDetails;
