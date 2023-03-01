import React, { useState } from "react";


// import { a } from 'react-router-dom';

const Card = ({children,styles}) => {

    return (
        <div className="card-container" style={styles} >
         {children}
        </div>
      );
};

export default Card;