import { useState, useEffect, useContext } from 'react';
import { Pagination, Stack } from '@mui/material';
import * as dataApi from '../../services/dataApi';
import Section from '../../modules/Section/Section';
import OrdersList from '../../modules/OrdersList/OrdersList';
import { MyContext } from '../../App';

import s from './OrdersPage.module.css'

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const {  handleDashChange } = useContext(MyContext);

    useEffect(() => {
        dataApi.getOrdersFirstRender().then(data => {
          let curPage = data.currentPage;
      
          setOrders(data.data)
          setTotalPages(data.totalPages)
          setCurrentPage(Number(curPage))

          handleDashChange((prevState) => {
            const updatedDash = [data.sqlQueries, ...prevState,]
            return updatedDash;
          })
        })
      }, []);

    const handlePageChange = (e, currentPage) => {
        dataApi.getOrders(currentPage).then(data => {
            setOrders(data.data)
            setCurrentPage(data.currentPage)
        })
    }

    return (
        <Section>
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