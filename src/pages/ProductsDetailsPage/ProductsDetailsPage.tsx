import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductsDetails from '../../modules/ProductsDetails/ProductsDetails';
import * as dataApi from "../../services/dataApi";
import { ProductItem } from '../../types/itemTypes';
import { ProductItemResponse } from '../../types/itemTypes';
import { SqlQuery } from '../../types/itemTypes';
import { MyContext } from "../../App";
import Section from '../../modules/Section/Section';
import Spinner from '../../modules/Loader/Loader';

interface RouteParams extends Record<string, string> {
    id: string;
  }

const ProductsDetailsPage: React.FC = () => {
    const [details, setDetails] = useState<ProductItem[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const { id } = useParams<RouteParams>();

    const {  handleDashChange } = useContext(MyContext);
   
    useEffect(() => {
        if (id !== undefined) {
            dataApi.getProductInfo(id).then((data: ProductItemResponse | undefined) => {
                if(data) {
                    const [detail] = data.data;
                    setDetails([detail])
        
                    handleDashChange((prevState: SqlQuery[][]): SqlQuery[][] => {
                        const updatedDash = [data.sqlQueries, ...prevState]
                        return updatedDash;
                      })
                }
                setLoader(false);
            })
        }
        setLoader(true);
    }, [id])




    return (
        <Section>
            {loader && <Spinner />}
             <ProductsDetails details={details}/>
        </Section>
     
    )

}

export default ProductsDetailsPage;