import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import EmployeeDetails from "../../modules/EmpoyeeDetails/EmpoyeeDetails";
import { MyContext } from "../../App";
import * as dataApi from "../../services/dataApi";

const EmployeeDetailsPage = () => {
    const [employeeInfo, setEmployeeInfo] = useState([]);
    const { id } = useParams();

    const {  handleDashChange } = useContext(MyContext);

    useEffect(() => {
        dataApi.getEmployeeInfo(id).then(data  => {
            const [employeeInfo] = data.data;
            setEmployeeInfo(employeeInfo);

            handleDashChange((prevState) => {
                const updatedDash = [data.sqlQueries[0], ...prevState]
                return updatedDash;
              })
        })
    }, [id]);

    return (
        <EmployeeDetails employeeInfo={employeeInfo} />
    )
};

export default EmployeeDetailsPage;