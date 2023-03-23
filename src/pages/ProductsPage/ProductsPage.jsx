import { useState, useEffect, useContext } from 'react';
import { Pagination, Stack } from '@mui/material';
import * as dataApi from '../../services/dataApi';
import ProductsList from '../../modules/ProductsList/ProductsList';
import Section from '../../modules/Section/Section';
import { MyContext } from '../../App';

import s from './ProductsPage.module.css'

const ProductsPage = () => {
const [products, setProducts] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);

const {  handleDashChange } = useContext(MyContext);

useEffect(() => {
  dataApi.getProductsFirstRender().then(data => {
    let curPage = data.currentPage;

    setProducts(data.data);
    setTotalPages(data.totalPages);
    setCurrentPage(Number(curPage));

    handleDashChange((prevState) => {
      const updatedDash = [data.sqlQueries, ...prevState, ]
      return updatedDash;
    });
  })
}, []);

const handlePageChange = (e, currentPage) => {
    dataApi.getProducts(currentPage).then(data => {
        setProducts(data.data)
        setCurrentPage(data.currentPage)
    })
}

    return (

<Section>
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
</Section>

    )
        
    
}


export default ProductsPage;