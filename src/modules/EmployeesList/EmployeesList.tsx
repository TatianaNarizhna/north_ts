import React from 'react';
import { Link } from "react-router-dom";
import Redo from "../../svgFile/symbol-defs.svg";
import { EmployeesRow } from '../../types/pageTypes';
import s from './EmployeesList.module.css';

interface IEmplProps {
  employees: EmployeesRow[];
}


const EmployeesList: React.FC<IEmplProps> = ({ employees }) => {
    return (
        <div>
          <header className={s.header}>
            <p className={s.card_header}>Employees</p>
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
                  <th>Name</th>
                  <th>Title</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Country</th>
              </tr>
          </thead>
          <tbody>
              {employees.map(({id, name, title, city, phone, country, avatarLink}, i) => (
                <>
                  <tr key={id} className={s.tr_wide}>
                       <td>
                         <div className={s.avatar_img}>
                             <img src={avatarLink} alt="Employees letters" className={s.radius}/></div>
                       </td>
                      <td><Link className={s.link} to={`/employee/${id}`}>{name}</Link></td>
                      <td>{title}</td>
                      <td>{city}</td>
                      <td>{phone}</td>
                      <td>{country}</td>
                      
                  </tr>

                  <tr key={i} className={s.tr_media}>
                       <td>
                         <div className={s.avatar_img}>
                             <img src={avatarLink} alt="Employees letters" className={s.radius}/></div>
                       </td>
                      <td><span className={s.span_media}>Name</span><Link className={s.link} to={`/employee/${id}`}>{name}</Link></td>
                      <td><span className={s.span_media}>Title</span>{title}</td>
                      <td><span className={s.span_media}>City</span>{city}</td>
                      <td><span className={s.span_media}>Phone</span>{phone}</td>
                      <td><span className={s.span_media}>Country</span>{country}</td>
                      
                  </tr>

                  </>
              ))}
          </tbody>
        </table>
      </div>
   </div>
  )

}

export default EmployeesList;
