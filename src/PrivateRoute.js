import { Route, Navigate } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import Main from "./Main";

function PrivateRoute({ isLogin, redirectPath = "/landing" }) {

  if (!localStorage.getItem("login")) {
    return <Navigate to={"/"} replace />;
  }
  // Create Private Routes Here
  return <Main />;
}
export default PrivateRoute;
