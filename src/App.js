import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import Home from './Components/Home'
import Registration from './Components/Registration'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Error from './Components/Error'
import Navbar from './Components/Navbar';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<Registration />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Routing></Routing>
    </div>
  )
}

export default App
