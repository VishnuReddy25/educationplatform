import React from "react"
import './App.css';
import SignInForm from "./components/Auth/SignInForm";
import { Routes,BrowserRouter,Route} from "react-router-dom";
import Home from "./components/Home/Home"
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
