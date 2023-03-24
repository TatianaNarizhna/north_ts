import React from 'react';
import { useNavigate } from "react-router-dom";
import s from './GoBackButton.module.css'

interface IBackButtonProps {
   path: string;
 }

const BackButton: React.FC<IBackButtonProps> = ({ path }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(path);
    };
  
    return (
       <div className={s.button_back}>
          <button
           className={s.button}
           type="button"
           onClick={handleClick}>Go back
          </button>
       </div>
    )
  }

  export default BackButton;