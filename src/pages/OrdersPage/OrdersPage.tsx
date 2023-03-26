import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Pagination, Stack } from '@mui/material';
import * as dataApi from '../../services/dataApi';
import Section from '../../modules/Section/Section';
import OrdersList from '../../modules/OrdersList/OrdersList';
import { SqlQuery } from '../../types/itemTypes';
import { OrderRow } from '../../types/pageTypes';
import { OrdersPageResponse } from '../../types/pageTypes';
import { MyContext } from '../../App';
import Spinner from '../../modules/Loader/Loader';

import s from './OrdersPage.module.css'

const OrdersPage: React.FC = () => {
    const [orders, setOrders] = useState<OrderRow[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [loader, setLoader] = useState<boolean>(false);

    const {  handleDashChange } = useContext(MyContext);

    useEffect(() => {
        dataApi.getOrdersFirstRender().then((data: OrdersPageResponse | undefined) => {
          if (data) {
            let curPage = data.currentPage;
      
            setOrders(data.data)
            setTotalPages(data.totalPages)
            setCurrentPage(Number(curPage))
  
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
        dataApi.getOrders(currentPage).then((data: OrdersPageResponse | undefined) => {
          if (data) {
            let curPage = data.currentPage;
            setOrders(data.data)
            setCurrentPage(Number(curPage))
          }
          setLoader(false);
        })
        setLoader(true);
    }

    return (
        <Section>
          {loader && <Spinner />}
            <OrdersList orders={orders}/>

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


export default OrdersPage;