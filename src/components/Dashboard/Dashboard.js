import React from "react";
import Card from "../../common/Card";
import Tasks from "./Tasks";

// import { a } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="main-container">
      <Tasks />
      <div className="div-container">
        <Card styles={{ height: "45vh", width: "38vw",marginLeft:10}}>
        <div className="taskHeader">
          <h3 className="headerName" >Trends</h3>
          </div>
        </Card>
        <Card styles={{ height: "40vh", width: "38vw",marginLeft:10 }}>
        <div className="taskHeader" style={{marginTop:10}}>
          <h3 className="headerName" >Efficiency</h3>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
