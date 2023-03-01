import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    // let data = localStorage.getItem("login");
    setUser(localStorage.getItem("login"));
    console.log("User",user);
  }, []);
  return (
    // <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/main"
          element={
            <PrivateRoute
              // isLogin={ ? true : false}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
