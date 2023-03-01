import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineHeatMap,AiFillDingtalkSquare } from "react-icons/ai";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
      <AiOutlineHeatMap className='companyLogo' size={32} />
      </div>
      <div className="search-bar">
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="buttons">
      <AiFillDingtalkSquare className="notifications-button" size={32} />
      </div>
    </header>
  );
}

export default Navbar;
