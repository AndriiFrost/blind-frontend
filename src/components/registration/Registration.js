import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [pasword, setPassword] = useState("");

  return (
    <div className="wrapper">
      <div className="form">
        <form className="form">
          <div className="field">
            <input
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="surname"
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
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
                registerUser({
                  name: name,
                  surname: surname,
                  email: email,
                  password: pasword,
                })
              }
            >
              Create
            </button>
          </div>

          <div className="signup-link">
            <p className="message">
              Already registered? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

function registerUser(registrationUser) {
  console.log(registrationUser);

  axios.post('http://localhost:8084/api/v1/auth/register', {
    firstName: registrationUser.name,
    lastName:  registrationUser.surname,
    email:  registrationUser.email,
    password:  registrationUser.password,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export default Registration;
