import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import DeviceList from "./components/device/DeviceList";
import AdminDeviceList from "./components/adminDevice/AdminDeviceList";
import "./css/main.css";
import AdminDeviceAdd from "./components/adminDevice/AdminDeviceAdd";
import DeviceAdd from "./components/device/DeviceAdd";
import DeviceAddNotFound from "./components/device/DeviceAddNotFound";
import EditBlind from "./components/device/EditBlind";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/devices" element={<DeviceList />}></Route>
        <Route path="/admin/devices" element={<AdminDeviceList />}></Route>
        <Route path="/admin/devices/add" element={<AdminDeviceAdd />}></Route>
        <Route path="/devices/add" element={<DeviceAdd />}></Route>
        <Route path="/devices/add/not-found" element={<DeviceAddNotFound />}></Route>
        <Route path="/device/:deviceId/edit" element={<EditBlind />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
