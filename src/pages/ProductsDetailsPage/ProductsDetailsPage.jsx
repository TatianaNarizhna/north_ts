import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductsDetails from '../../modules/ProductsDetails/ProductsDetails';
import * as dataApi from "../../services/dataApi";
import { MyContext } from "../../App";

const ProductsDetailsPage = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();

    const {  handleDashChange } = useContext(MyContext);


    useEffect(() => {
        dataApi.getProductInfo(id).then( data   => {
            const [detail] = data.data;
            setDetails(detail)

            handleDashChange((prevState) => {
                const updatedDash = [data.sqlQueries[0], ...prevState]
                return updatedDash;
              })
        })
    }, [id])

    return (
        <ProductsDetails details={details}/>
    )

}

export default ProductsDetailsPage;