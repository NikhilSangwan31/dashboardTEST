import { useState } from "react";
import { Login } from "../../Apis/LoginApi";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  const navigate = useNavigate();

// Email Validation Reqex
  // const checkValidation = () => {
  //   var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //    var isEmail = regx.test(email_id);  
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newData = await Login(username, password);
    console.log(newData, "console");
    if (newData.token) {
      localStorage.setItem("login", newData.token);
      navigate("/main");
    } else {
      alert("Invalid username Credentials");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          minWidth: "300px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Login</h2>
        <label
          htmlFor="username"
          style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            padding: "0.5rem",
            marginBottom: "1rem",
            width: "100%",
          }}
        />
        <label
          htmlFor="password"
          style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            padding: "0.5rem",
            marginBottom: "1rem",
            width: "100%",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
