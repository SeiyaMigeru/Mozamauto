import { PhoneIcon } from '../assets/icons';
import React from 'react';


const FloatingIcon = ({ isFixed }) => {
    const positionClass = isFixed ? 'fixed bottom-5 right-5 z-50' : 'absolute bottom-100 right-5 z-50';
    return (
      <div className={positionClass}>
      <span className="m-1 inline-flex justify-center items-center w-[60px] h-[60px] rounded-full bg-stone-500 hover:bg-stone-700 text-white shadow-3xl">
        <img src={PhoneIcon} width={24} height={24} />
      </span>
      </div>
    );
  };

export default FloatingIcon;