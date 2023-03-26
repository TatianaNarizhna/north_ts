import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import EmployeeDetails from "../../modules/EmpoyeeDetails/EmpoyeeDetails";
import { MyContext } from "../../App";
import { SqlQuery } from "../../types/itemTypes";
import { EmployeeItem } from '../../types/itemTypes';
import { EmployeeItemResponse } from '../../types/itemTypes';
import Spinner from '../../modules/Loader/Loader';
import Section from '../../modules/Section/Section';

import * as dataApi from "../../services/dataApi";

interface RouteParams extends Record<string, string> {
    id: string;
  }

const EmployeeDetailsPage: React.FC = () => {
    const [employeeInfo, setEmployeeInfo] = useState<EmployeeItem[]>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const { id } = useParams<RouteParams>();

    const {  handleDashChange } = useContext(MyContext);

    useEffect(() => {
        if (id !== undefined) {
            dataApi.getEmployeeInfo(id).then((data: EmployeeItemResponse | undefined)  => {
                if (data) {
                    const [employeeInfo] = data.data;
                    setEmployeeInfo([employeeInfo]);
        
                    handleDashChange((prevState: SqlQuery[][]) => {
                        const updatedDash = [data.sqlQueries[0], ...prevState]
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
             <EmployeeDetails employeeInfo={employeeInfo} />
        </Section>
       
    )
};

export default EmployeeDetailsPage;