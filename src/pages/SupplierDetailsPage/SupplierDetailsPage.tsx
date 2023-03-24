import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import * as dataApi from "../../services/dataApi";
import SupplierDetails from "../../modules/SupplierDetails/SupplierDetails";
import { SqlQuery } from "../../types/itemTypes";
import { SupplierItem } from "../../types/itemTypes";
import { SupplierItemResponse } from '../../types/itemTypes';
import { MyContext } from "../../App";

interface RouteParams extends Record<string, string> {
    id: string;
  }

const SupplierDetailsPage: React.FC = () => {
    const [details, setDetails] = useState<SupplierItem[]>([]);
    const { id } = useParams<RouteParams>();

    const {  handleDashChange } = useContext(MyContext);
   
    useEffect(() => {
        if (id !== undefined) {
            dataApi.getSupplierInfo(id).then((data: SupplierItemResponse | undefined) => {
                if (data) {
                    const [detail] = data.data;
                    setDetails([detail]);

                    handleDashChange((prevState: SqlQuery[][]): SqlQuery[][] => {
                        const updatedDash = [data.sqlQueries, ...prevState];
                        return updatedDash;
                    });
                }
            });
        }
    }, [id])
    

    return (
        
        <SupplierDetails details = {details}/>

    )
};

export default SupplierDetailsPage;