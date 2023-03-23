import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import OrderDetails from "../../modules/OrderDetails/OrderDetails";
import { MyContext } from "../../App";

import * as dataApi from "../../services/dataApi";


const OrderDetailsPage = () => {
    const [orderInfo, setOrderInfo] = useState([]);
    const [productsInfo, setProductsInfo] = useState([]);
    const { id } = useParams();

    const {  handleDashChange } = useContext(MyContext);
   
    useEffect(() => {
        dataApi.getOrderInfo(id).then( data => {
            const [orderInfo] = data.orderInfo;
            const productsInfo = data.productsInfo;
            setOrderInfo(orderInfo);
            setProductsInfo(productsInfo);

            handleDashChange((prevState) => {
                const updatedDash = [data.sqlQueries[0], ...prevState]
                return updatedDash;
              })

        })
    }, [id]);

    return (
        <OrderDetails details={orderInfo} productsInfo={productsInfo}/>
    )

}

export default OrderDetailsPage;