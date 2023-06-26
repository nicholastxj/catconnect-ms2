import React from 'react';
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">CatConnect</h1>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
