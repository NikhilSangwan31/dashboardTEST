import React from "react";
import "./Sidebar.css";

// import { a } from 'react-router-dom';

const MenuItem = ({ title, icon,active }) => {
  return (
    <>
      <li className= "list-section">
        {icon}
        <div className={active ? "menu-item" :"" } >
          {title}
        </div>
      </li>
    </>
  );
};

export default MenuItem;
