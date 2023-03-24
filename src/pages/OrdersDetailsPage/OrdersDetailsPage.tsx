import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import OrderDetails from "../../modules/OrderDetails/OrderDetails";
import { MyContext } from "../../App";
import { SqlQuery } from '../../types/itemTypes';
import { OrderItem } from '../../types/itemTypes';
import { ProductsInOrder } from '../../types/itemTypes';
import { OrderItemResponse } from '../../types/itemTypes';

import * as dataApi from "../../services/dataApi";

interface RouteParams extends Record<string, string> {
    id: string;
  }

const OrderDetailsPage: React.FC = () => {
    const [orderInfo, setOrderInfo] = useState<OrderItem[]>([]);
    const [productsInfo, setProductsInfo] = useState<ProductsInOrder[]>([]);
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
        })
      }
    }, [id]);
    

    return (
        <OrderDetails details={orderInfo} productsInfo={productsInfo}/>
    )
}

export default OrderDetailsPage;