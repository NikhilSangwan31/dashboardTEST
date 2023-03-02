
import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
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
