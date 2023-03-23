import { Link } from "react-router-dom";
import Redo from "../../svgFile/symbol-defs.svg";

import s from './CustomersList.module.css';

const CustomersList = ({ customers }) => {

      return (
            <div>
              <header className={s.header}>
                <p className={s.card_header}>Customers</p>
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
                      <th></th>
                      <th>Company</th>
                      <th>Contact</th>
                      <th>Title</th>
                      <th>City</th>
                      <th>Country</th>
                  </tr>
              </thead>
              <tbody>
                  {customers.map(({id, company, name, title, city, country, avatarLink }) => 
                    (
                     <tr key={id}>
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
                    )
                  )}
              </tbody>
            </table>
          </div>
       </div>
      )
  };
  
  export default CustomersList;