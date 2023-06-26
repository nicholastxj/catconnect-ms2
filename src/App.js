import React, { useState } from 'react';
import "./App.css";
import Header from "./Header";
import Login from './Login';
import Register from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  function toggleForm(formName) {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <Header />
      <div className="AuthForm">
      {currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
      </div>
    </div>
  );
};

export default App;
