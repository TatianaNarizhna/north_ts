import { Link } from "react-router-dom";
import Redo from "../../svgFile/symbol-defs.svg";
import s from './OrdersList.module.css';

const OrdersList = ({ orders }) => {

  const correctData = (shipped) => {
    let shippedCorrection = shipped.split(" ");
    let firstElement = shippedCorrection[0];
    return firstElement;

  }



    return (
          <div>
            <header className={s.header}>
              <p className={s.card_header}>Products</p>
              <div className={s.svg_container}>
              <svg width={22} height={22} >
              <use xlinkHref={`${Redo}#icon-redo`} ></use>
            </svg>
          </div>
        </header>
        <div>
          <table>
            <thead>
                <tr>
               
                    <th>Id</th>
                    <th>Total Price</th>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Shipped</th>
                    <th>Ship Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(({OrderId, TotalProductsPrice, TotalProducts, TotalProductsItems, Shipped, ShipName, City, Country}) => 
                  (
                    <tr key={OrderId}>
                    <td><Link className={s.link} to={`/order/${OrderId}`}>{OrderId}</Link></td>
                    <td>{TotalProductsPrice}</td>
                    <td>{TotalProducts}</td>
                    <td>{TotalProductsItems}</td>
                    <td>{ correctData(Shipped)}</td>
                    <td>{ShipName}</td>
                    <td>{City}</td>
                    <td>{Country}</td>
                   </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
     </div>
    )
};

export default OrdersList;