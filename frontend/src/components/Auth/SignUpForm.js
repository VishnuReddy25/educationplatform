

import React, { useState,useEffect } from 'react';
import  "../../assets/CSS/Signin.css";
import {GoogleOAuthProvider,GoogleLogin,useGoogleLogin} from "@react-oauth/google"
import {jwtDecode} from "jwt-decode"
import axios from "axios"
import {GoogleButton} from "react-google-button"
import OtpForm from "../Auth/OtpForm.js"
import Loader from "../Loader/Loader.js"
const SignUpForm = () => {
    const [loader,setLoader]=useState(false)
    const [otpForm,setOtpForm]=useState(false)
    const [loginDetails,setLoginDetails]=useState({})
    const [otpVerify,setOtpVerify]=useState(true)
    // State variables for email and password fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword]=useState("")
    // Event handler for changes in the email input field
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Event handler for changes in the password input field
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Event handler for form submission
    const handleSubmit = async(e) => {
        try{
        e.preventDefault();
        if (password!==confirmPassword){
            alert("password and confirm password didn't match")
        }else{
        console.log("before axios")
        let response=await axios.post("http://localhost:3001/api/auth/signup",{email:email,password:password,verified:false,authType:"general"})
        console.log("after axios")
        if(response.data.acknowledged===true){
            console.log(response.data.logindetails)
            setLoginDetails(prevState=>{return {...prevState,...response.data.logindetails}})
            setOtpVerify(prevState => !prevState);
            
            
           
            }
            
      else{
            console.log(response.data.des)
            alert(`your details were\n email;${email}\npassword: ${password}`)}
        }
    }catch(err){
        console.log(err)
    }

        // Add your form submission logic here
    };
    const googleSignUpHandler = (accessToken) => {
        console.log("google sign in executed")
        // const data = jwtDecode(credentialResponse.access_token);
        // setEmail(data.email);
        // alert("Google sign-in success");
        axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      alert(error);
    });


    };
    const handleConfirmPasswordChange=(e)=>{
        setConfirmPassword(e.target.value)
    }
    const glogin = useGoogleLogin({//default code given by google official documentation
        onSuccess: tokenResponse => googleSignUpHandler(tokenResponse.access_token),
      });
    
    // useEffect({
    // },[loginDetails.verified])
    if (loginDetails.verified===true){
        window.location.href="/home"
        console.log("verified by logindetails")
    }

    useEffect(() => {
        console.log("useeffect called")
        
        if (loginDetails.verified === false && otpVerify ===false) {
            const sendOtp = async () => {
                try {
                    setLoader(true)
                    const response2 = await axios.post("http://localhost:3001/api/send-otp", loginDetails);
                    console.log("OTP sent");
                    setOtpForm(true)//displays the form to enter otp
                    setLoader(false)
                    
                } catch (error) {
                    console.error("Error sending OTP:", error);
                }
            };

            sendOtp();  
        }
    }, [loginDetails, otpVerify]);


    if(otpForm===true){
        return (<>
        
        <OtpForm loginDetails={loginDetails} setLoginDetails={setLoginDetails}/></>)   
    }else{
    return (
        <div className='outerbody'>
        <div className="container">
            {loader&&
            <Loader/>
        }
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <label htmlFor="confirmpassword">Password:</label>
                <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                />
                <input type="submit" value="Sign Up" />
            </form>
            <GoogleButton 
            style={{width:"100%"}}
            label="Sign up with Google"
           
            onClick={() => glogin()}/>
        </div>
        </div>
    );}
};

export default SignUpForm;
