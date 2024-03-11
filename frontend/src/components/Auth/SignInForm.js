import React, { useState,useEffect } from 'react';
import "../../assets/CSS/Signin.css";
import { GoogleOAuthProvider, GoogleLogin ,useGoogleLogin} from "@react-oauth/google";
import {GoogleButton} from "react-google-button"
import { jwtDecode } from "jwt-decode";
import Loader from '../Loader/Loader';
import axios from "axios"
import OtpForm from './OtpForm';
const SignInForm = () => {
    const [loader,setLoader]=useState(false)
   const [otpForm,setOtpForm]=useState(false)
    const [loginDetails,setLoginDetails]=useState({})
    // State variables for email and password fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Event handler for changes in the email input field
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Event handler for changes in the password input field
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Event handler for form submission
    useEffect(()=>{
        console.log("useeffect login details executed")
        console.log(loginDetails)
        
        if(loginDetails.verified===true){
            console.log(loginDetails)
            //window.location.href="/home"
        }else if(loginDetails.verified===false){
            
            //we have to call the send otp function
            const sendOtp = async () => {
                try {
                    setLoader(true)
                    const response2 = await axios.post("http://localhost:3001/api/send-otp", loginDetails);
                    if (response2.data.acknowledged===true){
                    console.log("OTP sent");
                    setOtpForm(true)//displays the form to enter otp
                    setLoader(false)}else{
                        alert("an error occurred at our server \n",response2.data.des)
                    }
                    
                } catch (error) {
                    console.error("Error sending OTP:", error);
                }
            };

            sendOtp();  
            
        }
    },[loginDetails])
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response=await axios.post("http://localhost:3001/api/auth/signin",{email:email,password:password,authType:"general"}) // fetching the details from the server
        if (response.data.acknowledged===true){
            setLoginDetails(prevState=>({...prevState,...response.data.loginDetails}))
        }
        console.log(response.data)
        alert(`Your details were:\nEmail: ${email}\nPassword: ${password}`);


        // Add your form submission logic here
    };

    // Google sign-in handler
    
    const googleSignInHandler = (accessToken) => {
        console.log("google sign in executed")
        // const data = jwtDecode(credentialResponse.access_token);
        // setEmail(data.email);
        // alert("Google sign-in success");
        axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(async(response) => {
      console.log(response.data);
      const response2=await axios.post("http://localhost:3001/api/auth/google",response.data)
      console.log(response2.data)
      if (response2.data.acknowledged===true){
        console.log(response2.data.loginDetails)
        setLoginDetails(response2.data.loginDetails)
      }
    })
    .catch(error => {
      alert(error);
    });
    };
    const glogin = useGoogleLogin({
        onSuccess: tokenResponse => {console.log(tokenResponse);googleSignInHandler(tokenResponse.access_token)},
      });
    if(otpForm){
        return (<OtpForm loginDetails={loginDetails} setLoginDetails={setLoginDetails}/>)
    }else{
    return (

        <div className="container">
            {loader&&<Loader/>}
            <h2>Sign In</h2>
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
                <a href="svnm.com" className="forgot-password">
                    Forgot Password?
                </a>
                <input type="submit" value="Sign In" />
            </form>
            {/* <div style={{'width':'100%'}}>
                <GoogleOAuthProvider clientId="217758845790-257slng4gnj41e2doloqgehirho1n12t.apps.googleusercontent.com">
                    <GoogleLogin
                    
                        onSuccess={googleSignInHandler}
                        
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
            </div> */}
            <GoogleButton 
            style={{width:"100%"}}
            label="Sign in with Google"
           
            onClick={() => glogin()}/>
            
            
        </div>
    );}
};

export default SignInForm;
