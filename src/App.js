import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About"
import Login from "./components/Login/Login"
import Contact from "./components/Contact/Contact"
import React from 'react'
import "./App.css"
import Booking from "./Pages/Booking/Booking";
import MyBookings from "./Pages/MyBookings/MyBookings";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import FlightDetails from "./Pages/FlightDetails/FlightDetails";

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/mybooking" element={<MyBookings />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/adminpage" element={<AdminPage />}></Route>
        <Route path="/alldetails" element={<FlightDetails />}></Route>
      </Routes>
    </>
  );
}


export default App;
