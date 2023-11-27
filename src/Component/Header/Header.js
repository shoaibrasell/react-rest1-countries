import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>
      <h1>Welcome to my  copy side</h1>
      <h2>Using Surge Deploy</h2>
      <nav className='menu'>
        <a href="/homme">Home</a>
        <a href="/countries">Countries</a>
        <a href="/about">About</a>
        <a href="/contract">Contract</a>
      </nav>
    </div>
  );
};

export default Header;