import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Pagination, Stack } from '@mui/material';
import * as dataApi from '../../services/dataApi';
import SuppliersList from '../../modules/SuppliersList/SuppliersList';
import Section from '../../modules/Section/Section';
import { MyContext } from '../../App';
import { SqlQuery } from '../../types/itemTypes';
import { SuppliersPageResponse } from '../../types/pageTypes';
import { SuppliersRow } from '../../types/pageTypes';
import s from './SuppliersPage.module.css'



const SuppliersPage: React.FC = () => {
const [suppliers, setSuppliers] = useState<SuppliersRow[]>([]);
const [currentPage, setCurrentPage] = useState<number>(1);
const [totalPages, setTotalPages] = useState<number>(0);

const {  handleDashChange } = useContext(MyContext);


useEffect(() => {
  dataApi.getSuppliersFirstRender().then((data: SuppliersPageResponse | undefined) => {
    if(data) {
      let curPage = data.currentPage;
 
      setSuppliers(data.data)
      setTotalPages(data.totalPages)
      setCurrentPage(Number(curPage))
  
      handleDashChange((prevState: SqlQuery[][]): SqlQuery[][] => {
      
        const updatedDash = [data.sqlQueries, ...prevState,]
        // console.log(updatedDash);
        return updatedDash;
      })
    }
  })
}, [])

const handlePageChange = ( event: React.ChangeEvent<unknown>, currentPage: number) => {
    dataApi.getSuppliers(currentPage).then((data: SuppliersPageResponse | undefined) => {
      if(data) {
        let curPage = data.currentPage;
        setSuppliers(data.data)
        setCurrentPage(Number(curPage))
      }

    })
}

    return (
      <Section>
         <SuppliersList suppliers={suppliers} />

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



export default SuppliersPage;