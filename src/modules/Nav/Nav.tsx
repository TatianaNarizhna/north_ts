import { useState, useEffect } from "react";
import Menu from '../../svgFile/symbol-defs.svg';
import Dropdown from "../Dropdown/Dropdown";
import Navbar from "../NavBar/Navbar";
import s from './Nav.module.css';

const Nav = () => {
const [time, setTime] = useState(new Date());
const [activeLink, setActiveLink] = useState(false);


useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatingTime = (time: Date) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setActiveLink(!activeLink);
  };

   const activeLinkColor = (isActive:boolean) => {
    return isActive ? `${s.navBar_link} ${s.active}` : s.navBar_link;
   };

    return (
        <div className={s.navPanel}>
            <div className={s.time}>
                {formatingTime(time)}
            </div>

               <div className={s.navBar_menu}>
                 <div className={s.navBar_items}>

                <div className={s.navBar_items_media}>
                <a href="/" className={activeLinkColor(activeLink)}
                onClick ={handleLinkClick}>
                 <span className={s.navBar_icons}>
                    <svg width={18} height={18} >
                      <use xlinkHref={`${Menu}#icon-dots-three-vertical`} ></use>
                    </svg>
                  </span>
                </a>
                </div>

                <div className={s.navBar_items_wide}>
                 <a href="/" className={activeLinkColor(activeLink)}
                     onClick ={handleLinkClick}>
                   <span className={s.navBar_icons}>
                      <svg width={18} height={18} >
                        <use xlinkHref={`${Menu}#icon-menu`} ></use>
                     </svg>
                   </span>
                   <span className={s.test}>SQLite Links</span>
                   <span className={s.navBar_icons}>
                       <svg width={18} height={18} >
                          <use xlinkHref={`${Menu}#icon-arrow-down`} ></use>
                      </svg>
                   </span>
                  </a>
                  </div>
                {activeLink && <Dropdown />}
               </div>
            
            </div>

        </div>
    )
}

export default Nav;