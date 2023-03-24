import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CustomerDetails from "../../modules/CustomerDetails/CustomerDetails";
import { MyContext } from "../../App";
import { SqlQuery } from "../../types/itemTypes";
import { CustomerItem } from '../../types/itemTypes';
import { CustomerItemResponse } from '../../types/itemTypes';

import * as dataApi from "../../services/dataApi";

interface RouteParams extends Record<string, string> {
    id: string;
  }

const CustomerDetailsPage: React.FC = () => {
    const [customerInfo, setCustomerInfo] = useState<CustomerItem[]>([]);
    const { id } = useParams<RouteParams>();

    const {  handleDashChange } = useContext(MyContext);

    useEffect(() => {
        if (id !== undefined) {
            dataApi.getCustomerInfo(id).then((data: CustomerItemResponse | undefined) => {
                if (data) {
                    let [details] = data.data
     
                    setCustomerInfo([details]);
                    handleDashChange((prevState: SqlQuery[][]): SqlQuery[][] => {
                        const updatedDash = [data.sqlQueries, ...prevState]
                        return updatedDash;
                      }) 
                }
    
            })
        }

    }, [id]);

    return (
        <CustomerDetails details={customerInfo} />
    )

}

export default CustomerDetailsPage;