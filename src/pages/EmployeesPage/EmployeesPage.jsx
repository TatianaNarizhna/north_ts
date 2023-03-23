import { useState, useEffect, useContext } from 'react';
import * as dataApi from '../../services/dataApi';
import Section from '../../modules/Section/Section';
import EmployeesList from '../../modules/EmployeesList/EmployeesList';
import { MyContext } from '../../App';
import s from './EmployeesPage.module.css'

const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const {  handleDashChange } = useContext(MyContext);

    useEffect(() => {
        dataApi.getAllEmployees().then(data => {
          let curPage = data.currentPage;

          setEmployees(data.data)
          setTotalPages(data.totalPages)
          setCurrentPage(Number(curPage))

          handleDashChange((prevState) => {
            const updatedDash = [data.sqlQueries, ...prevState,]
            return updatedDash;
          })
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