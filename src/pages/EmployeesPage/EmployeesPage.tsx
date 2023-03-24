import React from 'react';
import { useState, useEffect, useContext } from 'react';
import * as dataApi from '../../services/dataApi';
import Section from '../../modules/Section/Section';
import EmployeesList from '../../modules/EmployeesList/EmployeesList';
import { SqlQuery } from '../../types/itemTypes';
import { EmployeesRow } from '../../types/pageTypes';
import { EmployeesPageResponse } from '../../types/pageTypes';
import { MyContext } from '../../App';
import s from './EmployeesPage.module.css'

const EmployeesPage: React.FC = () => {
    const [employees, setEmployees] = useState<EmployeesRow[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);

    const {  handleDashChange } = useContext(MyContext);

    useEffect(() => {
        dataApi.getAllEmployees().then((data: EmployeesPageResponse | undefined) => {
          if ( data) {
            let curPage = data.currentPage;

            setEmployees(data.data)
            setTotalPages(data.totalPages)
            setCurrentPage(Number(curPage))
  
            handleDashChange((prevState: SqlQuery[][]): SqlQuery[][] => {
              const updatedDash = [data.sqlQueries, ...prevState,]
              return updatedDash;
            })
          }
        })
      }, []);


    return <Section>
             <EmployeesList employees={employees}/>

              <div className={s.page_footer}>
               <p className={s.footer_info}>
                Page {Number(currentPage)} of {totalPages}
              </p>
             </div>
    </Section>
}


export default EmployeesPage;