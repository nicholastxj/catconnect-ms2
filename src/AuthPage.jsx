import React, { useState } from 'react';
import './AuthPage.css';
import Header from './Header';
import Login from './Login';
import Register from './Register';

function AuthPage({ onLogin }) {
  const [currentForm, setCurrentForm] = useState('login');

  const handleLoginClick = () => {
    onLogin();
  };

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="AuthPage">
      <Header />
      <div className="AuthForm">
        {currentForm === 'login' ? (
          <Login onFormSwitch={toggleForm} onLoginClick={handleLoginClick} />
        ) : (
          <Register onFormSwitch={toggleForm} onLoginClick={handleLoginClick} />
        )}
      </div>
    </div>
  );
}

export default AuthPage;
