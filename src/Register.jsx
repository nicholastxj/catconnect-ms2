import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // path to your firebase.js file where `auth` is defined.

function Register(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // For error message

    function handleSubmit(e) {
        e.preventDefault();
        setErrorMessage(''); // Clear any previous error message

        // Basic validation
        if (name === '' || email === '' || pass === '') {
            setErrorMessage('All fields are required.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log("User created", userCredential);
                // you can update the user's profile here if you want
                user.updateProfile({
                    displayName: name,
                }).then(() => {
                    // Update successful
                    console.log("Profile updated successfully");
                }).catch((error) => {
                    console.error("Error updating user profile:", error);
                    setErrorMessage("Error updating user profile.");
                });
            })
            .catch((error) => {
                // More detailed error handling
                console.log("Firebase error", error);
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        setErrorMessage('Email already in use.');
                        break;
                    case 'auth/invalid-email':
                        setErrorMessage('Invalid email.');
                        break;
                    case 'auth/weak-password':
                        setErrorMessage('Weak password.');
                        break;
                    default:
                        setErrorMessage('Could not register. Please check your details.');
                        break;
                }
            });
    }

    return(
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Smith" id="name" name="name"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johnsmith@gmail.com" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Register</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here.</button>
        </div>
    );
};

export default Register;
