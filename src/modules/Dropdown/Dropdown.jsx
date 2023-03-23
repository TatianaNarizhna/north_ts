import Link from '../../svgFile/symbol-defs.svg';
import s from './Dropdown.module.css';

const Dropdown = () => {
    return (
        <div className={s.dropdown}>
            <a className={s.drop_item} href="https://blog.cloudflare.com/introducing-d1/">
                <span>              
                    <svg width={23} height={23} >
                        <use xlinkHref={`${Link}#icon-link`} ></use>
                     </svg></span>
                <span className={s.drop_link}>Introducing D1</span>
            </a>
            <a className={s.drop_item} href="https://www.sqlite.org/lang.html">
                <span>
                     <svg width={23} height={23} >
                          <use xlinkHref={`${Link}#icon-link`} ></use>
                     </svg>
                </span>
                <span className={s.drop_link}>SQLite SQL Flavour</span>
            </a>
            <a className={s.drop_item} href="https://developers.cloudflare.com/workers/learning/using-durable-objects/">
                <span>
                      <svg width={23} height={23} >
                          <use xlinkHref={`${Link}#icon-link`} ></use>
                      </svg>
                </span>
                <span className={s.drop_link}>Durable Objects</span>
            </a>
        </div>
    )
};

export default Dropdown;
