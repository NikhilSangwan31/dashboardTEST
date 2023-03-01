import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function Main() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Sidebar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Main;
