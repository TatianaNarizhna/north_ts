import React from 'react';
import { Link } from "react-router-dom";
import Ballot from '../../svgFile/symbol-defs.svg';
import GoBackButton from '../GoBackButton/GoBackButton';
import { EmployeeItem } from '../../types/itemTypes';

import s from './EmpoyeeDetails.module.css';

interface IEmplProps {
    employeeInfo: EmployeeItem[];
}

const EmployeeDetails: React.FC<IEmplProps> = ({ employeeInfo }) => {
    let obj = employeeInfo[0];
    const {FirstName, LastName, Title, TitleOfCourtesy, BirthDate, HireDate, Address, City, PostalCode, Country, HomePhone, Extension, Notes, ReportsTo, reportsName } = obj || {};

    return (
        <>
         <div>
           <header className={s.header}>
             <div className={s.svg_container}> 
               <svg width={25} height={25} >
                 <use xlinkHref={`${Ballot}#icon-ballot`} ></use>
               </svg>
              </div>
               <p className={s.card_header}>Employee information</p>
            </header>

            <div className={s.card_content}>
                <div className={s.grid}>
                    <ul>
                        <li  className={s.list_field}>
                            <label  className={s.label}>Name</label>
                            <p  className={s.name}>{FirstName} {LastName}</p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>Title</label>
                            <p className={s.name}>{Title}</p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>Title Of Courtesy</label>
                            <p className={s.name}>{TitleOfCourtesy}</p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>Birth Date</label>
                            <p className={s.name}>{BirthDate}</p>
                        </li>
                        <li className={s.list_field}>
                            <label className={s.label}>Hire Date</label>
                            <p className={s.name}>{HireDate}</p>
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
                     <li className={s.list_field}>
                        <label className={s.label}>Country</label>
                         <p className={s.name}>{Country}</p>
                     </li>
                     <li className={s.list_field}>
                        <label className={s.label}>Home Phone</label>
                         <p className={s.name}>{HomePhone}</p>
                     </li>
                     <li className={s.list_field}>
                        <label className={s.label}>Extension</label>
                         <p className={s.name}>{Extension}</p>
                     </li>
                     <li className={s.list_field}>
                        <label className={s.label}>Notes</label>
                         <p className={s.name}>{Notes}</p>
                     </li>


                     {ReportsTo && <li className={s.list_field}>
                        <label className={s.label}>Reports To</label>
                         <p className={s.name}><Link className={s.link} to={`/employee/${ReportsTo}`}>{reportsName}</Link></p>
                     </li>}



                    </ul>

                </div>
            </div>
          </div>
          <GoBackButton path={"/employees"}/>
        </>
    )
}

export default EmployeeDetails;
