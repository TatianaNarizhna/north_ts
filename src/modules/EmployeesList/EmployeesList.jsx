import { Link } from "react-router-dom";
import Redo from "../../svgFile/symbol-defs.svg";
import s from './EmployeesList.module.css';

const EmployeesList = ({ employees }) => {
    return (
        <div>
          <header className={s.header}>
            <p className={s.card_header}>Employees</p>
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
                  <th>Name</th>
                  <th>Title</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Country</th>
              </tr>
          </thead>
          <tbody>
              {employees.map(({id, name, title, city, phone, country, avatarLink}) => (
                  <tr key={id}>
                       <td>
                         <div className={s.avatar_img}>
                             <img src={avatarLink} alt="Employees letters" className={s.radius}/></div>
                       </td>
                      <td><Link className={s.link} to={`/employee/${id}`}>{name}</Link></td>
                      <td>{title}</td>
                      <td>{city}</td>
                      <td>{phone}</td>
                      <td>{country}</td>
                      
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
   </div>
  )

}

export default EmployeesList;
