// src/components/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => (
  <header className="header">
    <div className="logo">JobbNode</div>
    <nav className="nav">
      <a href="/">Home</a>
      <a href="/">Job Listings</a>
      <a href="/">Notifications</a>
      <a href="/">Messages</a>
      <a href="/">Profile</a>
    </nav>
  </header>
);

export default Header;
