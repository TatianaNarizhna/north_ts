import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import CustomerDetails from "../../modules/CustomerDetails/CustomerDetails";
import { MyContext } from "../../App";

import * as dataApi from "../../services/dataApi";

const CustomerDetailsPage = () => {
    const [customerInfo, setCustomerInfo] = useState([]);
    const { id } = useParams();

    const {  handleDashChange } = useContext(MyContext);

    useEffect(() => {
        dataApi.getCustomerInfo(id).then( data => {
            let [details] = data.data
 
            setCustomerInfo(details);
            handleDashChange((prevState) => {
                const updatedDash = [data.sqlQueries[0], ...prevState]
                return updatedDash;
              }) 
        })
    }, [id]);

    return (
        <CustomerDetails details={customerInfo} />
    )

}

export default CustomerDetailsPage;