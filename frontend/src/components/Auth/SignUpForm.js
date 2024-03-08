

import React, { useState } from 'react';
import  "../../assets/CSS/Signin.css";
import {GoogleOAuthProvider,GoogleLogin,useGoogleLogin} from "@react-oauth/google"
import {jwtDecode} from "jwt-decode"
import axios from "axios"
import {GoogleButton} from "react-google-button"
const SignUpForm = () => {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password!=confirmPassword){
            alert("password and confirm password didn't match")
        }else{
        alert(`your details were\n email;${email}\npassword: ${password}`)}

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
    const glogin = useGoogleLogin({
        onSuccess: tokenResponse => googleSignUpHandler(tokenResponse.access_token),
      });
    return (
        <div className="container">
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
            label="Sign in with Google"
           
            onClick={() => glogin()}/>
        </div>
    );
};

export default SignUpForm;
