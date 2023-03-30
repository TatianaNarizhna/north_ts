import React from 'react';
import { Link } from "react-router-dom";
import Redo from "../../svgFile/symbol-defs.svg";
import { CustomerRow } from '../../types/pageTypes';

import s from './CustomersList.module.css';

interface ICustomerProps {
  customers: CustomerRow[];
}

const CustomersList: React.FC<ICustomerProps> = ({ customers }) => {

      return (
            <div className={s.border}>
              <header className={s.header}>
                <p className={s.card_header}>Customers</p>
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
                      <th></th>
                      <th>Company</th>
                      <th>Contact</th>
                      <th>Title</th>
                      <th>City</th>
                      <th>Country</th>
                  </tr>
              </thead>
              <tbody>
                  {customers.map(({id, company, name, title, city, country, avatarLink }, i) => 
                    (
                   <>
                     <tr key={id} className={s.tr_wide} style={{backgroundColor: i % 2 === 0 ? 'transparent' : 'var(--title-white-color)'}}>
                       <td>
                         <div className={s.avatar_img}>
                             <img src={avatarLink} alt="Customers letters" className={s.radius}/></div>
                       </td>
                      <td><Link className={s.link} to={`/customer/${id}`}>{company}</Link></td>
                      <td>{name}</td>
                      <td>{title}</td>
                      <td>{city}</td>
                      <td>{ country}</td>
                     </tr>

                     <tr key={i} className={s.tr_media}>
                       <td>
                         <div className={s.avatar_img}>
                             <img src={avatarLink} alt="Customers letters" className={s.radius}/></div>
                       </td>
                      <td><span className={s.span_media}>Company</span><Link className={s.link} to={`/customer/${id}`}>{company}</Link></td>
                      <td><span className={s.span_media}>Contact</span>{name}</td>
                      <td><span className={s.span_media}>Title</span>{title}</td>
                      <td><span className={s.span_media}>City</span>{city}</td>
                      <td><span className={s.span_media}>Country</span>{ country}</td>
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
  
  export default CustomersList;