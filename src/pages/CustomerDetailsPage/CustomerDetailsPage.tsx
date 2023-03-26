import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CustomerDetails from "../../modules/CustomerDetails/CustomerDetails";
import { MyContext } from "../../App";
import { SqlQuery } from "../../types/itemTypes";
import { CustomerItem } from '../../types/itemTypes';
import { CustomerItemResponse } from '../../types/itemTypes';
import Section from '../../modules/Section/Section';
import Spinner from '../../modules/Loader/Loader';

import * as dataApi from "../../services/dataApi";

interface RouteParams extends Record<string, string> {
    id: string;
  }

const CustomerDetailsPage: React.FC = () => {
    const [customerInfo, setCustomerInfo] = useState<CustomerItem[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
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
                setLoader(false);
            })
        }
        setLoader(true);
    }, [id]);

    return (
        <Section>
             {loader && <Spinner /> }
             <CustomerDetails details={customerInfo} />
        </Section>
    )

}

export default CustomerDetailsPage;