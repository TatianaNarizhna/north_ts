import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Pagination, Stack } from '@mui/material';
import * as dataApi from '../../services/dataApi';
import ProductsList from '../../modules/ProductsList/ProductsList';
import Section from '../../modules/Section/Section';
import { SqlQuery } from '../../types/itemTypes';
import { ProductsRow } from '../../types/pageTypes';
import { ProductsPageResponse } from '../../types/pageTypes';
import Spinner from '../../modules/Loader/Loader';
import { MyContext } from '../../App';

import s from './ProductsPage.module.css'

const ProductsPage: React.FC = () => {
const [products, setProducts] = useState<ProductsRow[]>([]);
const [currentPage, setCurrentPage] = useState<number>(1);
const [totalPages, setTotalPages] = useState<number>(0);
const [loader, setLoader] = useState<boolean>(false);

const {  handleDashChange } = useContext(MyContext);

useEffect(() => {
  dataApi.getProductsFirstRender().then((data: ProductsPageResponse | undefined) => {
    if(data) {
      let curPage = data.currentPage;

      setProducts(data.data);
      setTotalPages(data.totalPages);
      setCurrentPage(Number(curPage));
  
      handleDashChange((prevState: SqlQuery[][]): SqlQuery[][] => {
        const updatedDash = [data.sqlQueries, ...prevState, ]
        return updatedDash;
      });
      setLoader(false);
    }

  })
  setLoader(true);
}, []);

const handlePageChange = (event: React.ChangeEvent<unknown>, currentPage: number) => {
    dataApi.getProducts(currentPage).then((data: ProductsPageResponse | undefined) => {
      if (data) {
        let curPage = data.currentPage;
        setProducts(data.data)
        setCurrentPage(Number(curPage))
      }
      setLoader(false);
    })
    setLoader(true);
}

    return (

<Section>
    {loader && <p>Loading products...</p>}
    {!loader && (
      <>
           <ProductsList products={products}/>

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
      </>
    )}

</Section>
    )  
}

export default ProductsPage;