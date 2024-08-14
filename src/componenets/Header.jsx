import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Header = ({ handleSearch }) => {
  return (
    <>
      <div className='inpt'>
        <div className="d-flex justify-content-center align-center">
          <p className='baba'>Home</p>
          <p className='baba'><IoIosArrowForward /></p>
          <p className='babaa'>Dashboard</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search cards..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
