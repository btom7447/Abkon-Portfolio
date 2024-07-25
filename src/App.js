import React, { useState } from 'react';
import "./style/index.css";
import "./style/mobile.css";
import "./style/tablet.css";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import Main from './components/Main';

const App = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <Sidebar />
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} />
      <Main />
    </div>
  );
};

export default App;
