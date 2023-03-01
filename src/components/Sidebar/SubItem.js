import React from "react";
import "./Sidebar.css";


// import { a } from 'react-router-dom';

const SubItem = ({text,icon}) => {
  return (
      <div className="menu-div">
        {icon}
        <div className="menu-div-text">
         {text}
        </div>
      </div>
  );
};

export default SubItem;