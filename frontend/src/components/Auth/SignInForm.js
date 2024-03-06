

import React, { useState } from 'react';
import  "../../assets/CSS/Signin.css";

const SignInForm = () => {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

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
                <a href="svnm.com" className="forgot-password">
                    Forgot Password?
                </a>
                <input type="submit" value="Sign In" />
            </form>
        </div>
    );
};

export default SignInForm;
