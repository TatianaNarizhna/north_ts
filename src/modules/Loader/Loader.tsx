import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import s from './Loader.module.css';

const Spinner:React.FC = () => {
  return (
    <div className={s.spinner}>
        <MagnifyingGlass
  visible={true}
  height="50"
  width="50"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#4682B4'
/>
    </div>
  );
};

export default Spinner;