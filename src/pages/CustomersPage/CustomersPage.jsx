import { useState, useEffect, useContext } from 'react';
import { Pagination, Stack } from '@mui/material';
import * as dataApi from '../../services/dataApi';
import Section from '../../modules/Section/Section';
import CustomersList from '../../modules/CustomersList/CustomersList';
import { MyContext } from '../../App';
import s from './CustomersPage.module.css'

const CustomersPage = () => {
    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const {  handleDashChange } = useContext(MyContext);

    useEffect(() => {
        dataApi.getCustomersFirstRender().then(data => {
          let curPage = data.currentPage;
          setCustomers(data.data)
          setTotalPages(data.totalPages)
          setCurrentPage(Number(curPage))
        })
      }, []);

    const handlePageChange = (e, currentPage) => {
        dataApi.getCustomers(currentPage).then(data => {
            setCustomers(data.data)
            setCurrentPage(data.currentPage)

            handleDashChange((prevState) => {
              const updatedDash = [data.sqlQueries, ...prevState,]
              return updatedDash;
            })
        })
    }

    return (
        <Section>
            <CustomersList customers={customers}/>

             <div className={s.page_footer}>
             <Stack spacing={2}>
               <Pagination count={totalPages} variant="outlined" shape="rounded" 
                page={Number(currentPage)}
                onChange={handlePageChange}
                hideNextButton
                hidePrevButton
                size="large"
              />

            </Stack>
              <p className={s.footer_info}>
                Page {Number(currentPage)} of {totalPages}
              </p>
             </div>

        </Section>
    )

}


export default CustomersPage;