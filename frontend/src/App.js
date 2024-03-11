import React from "react"
import './App.css';
import SignInForm from "./components/Auth/SignInForm";
import { Routes,BrowserRouter,Route} from "react-router-dom";
import Home from "./components/Home/Home"
import SignUpForm from "./components/Auth/SignUpForm";
import OtpForm from "./components/Auth/OtpForm";
import Loader from "./components/Loader/Loader";
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/otp" element={<OtpForm/>}/>
      <Route path="loader" element={<Loader/>}/>

      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
