import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Pagination, Stack } from '@mui/material';
import * as dataApi from '../../services/dataApi';
import Section from '../../modules/Section/Section';
import CustomersList from '../../modules/CustomersList/CustomersList';
import { MyContext } from '../../App';
import { SqlQuery } from '../../types/itemTypes';
import { CustomerRow } from '../../types/pageTypes';
import { CustomersPageResponse } from '../../types/pageTypes';
import Spinner from '../../modules/Loader/Loader';
import s from './CustomersPage.module.css'

const CustomersPage: React.FC = () => {
    const [customers, setCustomers] = useState<CustomerRow[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loader, setLoader] = useState<boolean>(false);

    const {  handleDashChange } = useContext(MyContext);

    useEffect(() => {
        dataApi.getCustomersFirstRender().then((data: CustomersPageResponse | undefined) => {
          if (data) {
            let curPage = data.currentPage;
            setCustomers(data.data);
            setTotalPages(data.totalPages);
            setCurrentPage(Number(curPage));
  
            handleDashChange((prevState: SqlQuery[][]): SqlQuery[][] => {
              const updatedDash = [data.sqlQueries, ...prevState,]
              return updatedDash;
            })
            setLoader(false);
          }
        })
        setLoader(true);
      }, []);

    const handlePageChange = (event: React.ChangeEvent<unknown>, currentPage: number) => {
        dataApi.getCustomers(currentPage).then((data: CustomersPageResponse | undefined) => {
          if (data) {
            let curPage = data.currentPage;
            setCustomers(data.data)
            setCurrentPage(Number(curPage))
          }
          setLoader(false);
        })
        setLoader(true);
    }

    return (
        <Section>
          {loader && <Spinner />}
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