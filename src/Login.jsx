import React, { useState } from 'react';

function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johnsmith@gmail.com" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button htmlFor="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    );
};

export default Login;
