import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");
  const  loginUser = (login) => {
    console.log(login);
    axios
      .post("http://localhost:8084/api/v1/auth/authenticate", {
        email: login.email,
        password: login.password,
      })
      .then(function (response) {
        console.log(response.data.token);
        localStorage.setItem(
          "Authentication",
          response.data.token
        );
        navigate("/devices")
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="wrapper">
      <div className="form">
        <form className="form">
          <div className="field">
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <button
              type="button"
              className="submit"
              onClick={() =>
              
                loginUser({
                  email: email,
                  password: pasword,
                })
              }
            >
              Login
            </button>
          </div>

          <div className="signup-link">
            <p className="message">
              Not registered? <Link to="/registration">Create an account</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;
