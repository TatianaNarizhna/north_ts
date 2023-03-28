import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import OrderDetails from "../../modules/OrderDetails/OrderDetails";
import { MyContext } from "../../App";
import { SqlQuery } from '../../types/itemTypes';
import { OrderItem } from '../../types/itemTypes';
import { ProductsInOrder } from '../../types/itemTypes';
import { OrderItemResponse } from '../../types/itemTypes';
import Spinner from '../../modules/Loader/Loader';
import Section from '../../modules/Section/Section';

import * as dataApi from "../../services/dataApi";

interface RouteParams extends Record<string, string> {
    id: string;
  }

const OrderDetailsPage: React.FC = () => {
    const [orderInfo, setOrderInfo] = useState<OrderItem[]>([]);
    const [productsInfo, setProductsInfo] = useState<ProductsInOrder[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const { id } = useParams<RouteParams>();

    const {  handleDashChange } = useContext(MyContext);
   
    useEffect(() => {
      if (id !== undefined) {
        dataApi.getOrderInfo(id).then((data: OrderItemResponse | undefined) => {
          if(data) {
            const orderInfo = data.orderInfo;
            const productsInfo = data.productsInfo;
            setOrderInfo(orderInfo);
            setProductsInfo(productsInfo);

            handleDashChange((prevState: SqlQuery[][]): SqlQuery[][] => {
                let updatedDash = prevState;
                if (Array.isArray(data.sqlQueries)) {
                  updatedDash = [data.sqlQueries, ...prevState];
                } else {
                  updatedDash = [data.sqlQueries, ...prevState];
                }
                return updatedDash;
              })
          }
          setLoader(false);
        })
      }
      setLoader(true);
    }, [id]);
    

    return (
      <Section>
         {loader && <p>No such order...</p> }
          {!loader && <OrderDetails details={orderInfo} productsInfo={productsInfo}/>}
      </Section>
      
    )
}

export default OrderDetailsPage;