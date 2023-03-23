import { useNavigate } from "react-router-dom";
import s from './GoBackButton.module.css'


function BackButton({ path }) {
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