import { Link } from "react-router-dom"
import Redo from "../../svgFile/symbol-defs.svg"
import s from './SuppliersList.module.css'



const SuppliersList = ({suppliers}) => {

    return (
    <section className={s.section}>
    <div>
        <header className={s.header}>
            <p className={s.card_header}>Suppliers</p>
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
                    <th></th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Title</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {suppliers.map(({id, avatarLink, companyName, name, title, city, country}) => (
                    <tr key={id}>
                        <td>
                            <div className={s.avatar_img}>
                                <img src={avatarLink} alt="Contact letters" className={s.radius}/></div>
                          </td>
                        <td><Link className={s.link} to={`/supplier/${id}`}>{companyName}</Link></td>
                        <td>{name}</td>
                        <td>{title}</td>
                        <td>{city}</td>
                        <td>{country}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    </div>
    </section>
    )
}

export default SuppliersList