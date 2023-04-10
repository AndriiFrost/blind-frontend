import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DeviceList = () => {
    getAllItem()
  const [email, setEmail] = useState("");
  const [pasword, setPassword] = useState("");
  return <div></div>;
};

function getAllItem() {
  const token = localStorage.getItem("Authentication");
  axios
    .get("http://localhost:8084/api/v1/device", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default DeviceList;
