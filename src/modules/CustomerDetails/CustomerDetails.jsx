import { Link } from "react-router-dom";
import Section from "../Section/Section";
import Ballot from '../../svgFile/symbol-defs.svg';
import GoBackButton from '../GoBackButton/GoBackButton';

import s from './CustomerDetails.module.css';

const CustomerDetails = ({ details}) => {
    const {CompanyName, ContactName, ContactTitle, Address, City, PostalCode, Region, Country, Phone, Fax } = details;
 
     return (
         <Section>
          <div>
            <header className={s.header}>
              <div className={s.svg_container}> 
                <svg width={25} height={25} >
                  <use xlinkHref={`${Ballot}#icon-ballot`} ></use>
                </svg>
               </div>
                <p className={s.card_header}>Customer information</p>
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
                      <li className={s.list_field}>
                         <label className={s.label}>Postal Code</label>
                          <p className={s.name}>{PostalCode}</p>
                      </li>
                      {Region &&  <li className={s.list_field}>
                         <label className={s.label}>Region</label>
                          <p className={s.name}>{Region}</p>
                      </li>}

                      <li className={s.list_field}>
                         <label className={s.label}>Country</label>
                          <p className={s.name}>{Country}</p>
                      </li>
                      <li className={s.list_field}>
                         <label className={s.label}>Phone</label>
                          <p className={s.name}>{Phone}</p>
                      </li>
                      <li className={s.list_field}>
                         <label className={s.label}>Fax</label>
                          <p className={s.name}>{Fax}</p>
                      </li>
 
                     </ul>
 
                 </div>
             </div>
           </div>
           <GoBackButton path={"/customers"}/>
         </Section>
     
      
     
     )
 
 }
 
 export default CustomerDetails;