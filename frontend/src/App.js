import React from "react"
import './App.css';
import SignInForm from "./components/Auth/SignInForm";
import { Routes,BrowserRouter,Route} from "react-router-dom";
import Home from "./components/Home/Home"
import SignUpForm from "./components/Auth/SignUpForm";
import OtpForm from "./components/Auth/OtpForm";
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/otp" element={<OtpForm/>}/>

      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
