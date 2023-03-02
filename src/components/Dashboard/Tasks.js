import React, { useState } from "react";
import Card from "../../common/Card";
import "./Dashboard.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// import { a } from 'react-router-dom';

const Tasks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (newValue) => {
    setTabIndex(newValue);
  };

  const renderTabContent = () => {
    switch (tabIndex) {
      case 0:
        return (
          <div>
            <Card
              styles={{
                marginTop: 5,
                height: "45vh",
                width: "43vw",
                backgroundColor: "#fff",
              }}
            />
            <Card
              styles={{
                marginTop: 5,
                height: "20vh",
                width: "43vw",
                backgroundColor: "#fff",
              }}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <Card
              styles={{
                
                height: "45vh",
                width: "43vw",
                backgroundColor: "#fff",
              }}
            >
              <h3 style={{ paddingTop: 10, marginLeft: 10 }}>Pending tasks</h3>
              <p style={{ padding: 10 }}>List of pending tasks goes here</p>
            </Card>
            <Card
              styles={{
                height: "20vh",
                width: "43vw",
                backgroundColor: "#fff",
              }}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Card
              styles={{
                marginTop: 5,
                height: "45vh",
                width: "43vw",
                backgroundColor: "#fff",
              }}
            >
              <h3 style={{ paddingTop: 10, marginLeft: 10 }}>Monthly tasks</h3>
              <p style={{ padding: 10 }}>List of monthly tasks goes here</p>
            </Card>
            <Card
              styles={{
                marginTop: 5,
                height: "20vh",
                width: "43vw",
                backgroundColor: "#fff",
              }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card styles={{ height: "86.5vh", width: "44vw" }}>
      <div className="taskHeader">
        <h3 className="headerName">Tasks</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AiOutlineLeft
            style={{ marginTop: 5, color: "grey", paddingRight: 10 }}
            size={16}
          />
          <div className="tab-container">
            <div
              style={{
                color: tabIndex === 0 ? "#609dfe" : "#000",
                display: "flex",
                justifyContent: "center",
              }}
              className={tabIndex === 0 ? "active" : ""}
              onClick={() => handleTabChange(0)}
            >
              Daily
            </div>
            <div className={tabIndex === 0 ? "underline" : "line"}></div>
          </div>
          <div className="tab-container">
            <div
              style={{
                color: tabIndex === 1 ? "#609dfe" : "#000",
                display: "flex",
                justifyContent: "center",
              }}
              className={tabIndex === 1 ? "active" : ""}
              onClick={() => handleTabChange(1)}
            >
              Pending
            </div>
            <div className={tabIndex === 1 ? "underline" : "line"}></div>
          </div>
          <div className="tab-container">
            <div
              style={{
                
                color: tabIndex === 2 ? "#609dfe" : "#000",
                display: "flex",
                justifyContent: "center",
              }}
              className={tabIndex === 2 ? "active" : ""}
              onClick={() => handleTabChange(2)}
            >
              Monthly
            </div>
            <div className={tabIndex === 2 ? "underline" : "line"}></div>
          </div>
          <AiOutlineRight
            style={{ marginTop: 5, color: "grey" }}
            size={16}
          />
        </div>
      </div>

      <div style={{ padding: "10px" }}>{renderTabContent()}</div>
    </Card>
  );
};

export default Tasks;
