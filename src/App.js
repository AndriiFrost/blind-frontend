import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import DeviceList from "./components/device/DeviceList";
import "./css/main.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/devices" element={<DeviceList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
