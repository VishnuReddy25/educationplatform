import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SignInForm from "./components/Auth/SignInForm";
import Home from "./components/Pages/Home";
import SignUpForm from "./components/Auth/SignUpForm";
import OtpForm from "./components/Auth/OtpForm";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar.js";
import CoursePayment from "./components/payment/CoursePayment.js";
import ContactUs from "./components/Pages/ContactUs.js";
import AboutUs from "./components/Pages/AboutUs.js";
import CourseList from "./components/CourseList.js";
import Coursecontent from './components/Pages/Coursecontent.js'
function App() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar component outside of Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/otp" element={<OtpForm />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/paymentform" element={<CoursePayment />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/courselist" element={<CourseList/>}/>
        <Route path="/courseplayer" element={<Coursecontent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
