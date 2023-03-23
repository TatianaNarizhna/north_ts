import { Link } from "react-router-dom";
import Redo from "../../svgFile/symbol-defs.svg";
import s from './ProductsList.module.css';

const ProductsList = ({ products }) => {
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
               
                    <th>Name</th>
                    <th>Qt per unit</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Orders</th>
                </tr>
            </thead>
            <tbody>
                {products.map(({id, name, qt, price, stock, orders}) => (
                    <tr key={id}>
                        <td><Link className={s.link} to={`/product/${id}`}>{name}</Link></td>
                        <td>{qt}</td>
                        <td>{price}</td>
                        <td>{stock}</td>
                        <td>{orders}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
     </div>
    )
};

export default ProductsList;