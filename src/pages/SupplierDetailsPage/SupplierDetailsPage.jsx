import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import * as dataApi from "../../services/dataApi";
import SupplierDetails from "../../modules/SupplierDetails/SupplierDetails";
import { MyContext } from "../../App";

const SupplierDetailsPage = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();

    const {  handleDashChange } = useContext(MyContext);
   
    useEffect(() => {
        dataApi.getSupplierInfo(id).then( data => {
            const [detail] = data.data
            setDetails(detail)

            handleDashChange((prevState) => {
                const updatedDash = [data.sqlQueries[0], ...prevState]
                return updatedDash;
              })
        })
        
    }, [id])
    

    return (
        
        <SupplierDetails details={details}/>

    )
};

export default SupplierDetailsPage;