import React from 'react';
import Section from '../Section/Section';
import Ballot from '../../svgFile/symbol-defs.svg';
import GoBackButton from '../GoBackButton/GoBackButton';
import { SupplierItem } from '../../types/itemTypes';
import s from './SupplierDetails.module.css';

interface ISupplProps {
    details: SupplierItem[];
}

const SupplierDetails:React.FC<ISupplProps> = ({ details }) => {
    let obj = details[0];
    const {Address, City, CompanyName, ContactName, ContactTitle, Country, Phone, PostalCode, Region } = obj || {};


    return (
        <>
         <div>
           <header className={s.header}>
             <div className={s.svg_container}> 
               <svg width={25} height={25} >
                 <use xlinkHref={`${Ballot}#icon-ballot`} ></use>
               </svg>
              </div>
               <p className={s.card_header}>Supplier information</p>
            </header>

            <div className={s.card_content}>
                <div className={s.grid}>
                    <ul>
                        <li  className={s.list_field}>
                            <label  className={s.label}>Company Name</label>
                            <p  className={s.name}>{CompanyName}</p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>Contact Name</label>
                            <p className={s.name}>{ContactName}</p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>Contact Title</label>
                            <p className={s.name}>{ContactTitle}</p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>Address</label>
                            <p className={s.name}>{Address}</p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>City</label>
                            <p className={s.name}>{City}</p>
                        </li>
                    </ul>

                    <ul>
                    {Region &&  <li className={s.list_field}>
                        <label className={s.label}>Region</label>
                         <p className={s.name}>{Region}</p>
                     </li>}
                     <li className={s.list_field}>
                        <label className={s.label}>Postal Code</label>
                         <p className={s.name}>{PostalCode}</p>
                     </li>
                     <li className={s.list_field}>
                        <label className={s.label}>Country</label>
                         <p className={s.name}>{Country}</p>
                     </li>
                     <li className={s.list_field}>
                        <label className={s.label}>Phone</label>
                         <p className={s.name}>{Phone}</p>
                     </li>

                    </ul>

                </div>
            </div>
          </div>
          <GoBackButton path={"/suppliers"}/>
        </>
    
     
    
    )
};

export default SupplierDetails;