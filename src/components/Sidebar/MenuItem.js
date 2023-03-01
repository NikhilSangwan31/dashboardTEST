import React from "react";
import "./Sidebar.css";

// import { a } from 'react-router-dom';

const MenuItem = ({ title, icon,active }) => {
  return (
    <>
      <li className= "list-section">
        {icon}
        <a className={active ? "menu-item" :"" }to="/dashboard">
          {title}
        </a>
      </li>
    </>
  );
};

export default MenuItem;
