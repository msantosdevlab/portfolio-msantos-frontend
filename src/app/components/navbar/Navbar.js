// components/Navbar.js
import { IconButton, Drawer, Button } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import React, { useState, useEffect } from 'react';
import ThemeToggle from '../ThemeToggle';

export default function Navbar({ darkMode, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };


  return (
    <header className="navbar dark:bg-dark-primary bg-light-primary border-b dark:border-[#050505] border-gray-100 ">
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="text-2xl font-bold text-pinkLogo">
            M<span className="dark:text-gray-300  text-black ">SANTOS</span>
        </div>

      <nav className="nav-links">
        <a href="#ola" className="dark:text-gray-300  text-black">Olá</a>
        <a href="#projetos" className="dark:text-gray-300  text-black">Projetos</a>
        <a href="#contato" className="dark:text-gray-300  text-black">Contato</a>
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      </nav>

        <div className="hamburger">
          <Button onClick={toggleDrawer(true)}><MenuIcon className="dark:text-gray-300  text-black mx-auto" /></Button>
        </div>
      </div>
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <div className="dark:bg-dark-secondary bg-light-secondary w-64 p-4 h-full">
          <div className="flex justify-between items-center mb-6">
            <div className="font-bold dark:text-gray-300 text-black">Menu</div>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon className="text-gray-800 dark:text-white" />
            </IconButton>
          </div>
          <nav className="mobile-menu">
            <a href="#ola" className="dark:text-gray-300  text-black">Olá</a>
            <a href="#projetos" className="dark:text-gray-300  text-black">Projetos</a>
            <a href="#contato" className="dark:text-gray-300  text-black">Contato</a>
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </nav>
        </div> 
      </Drawer>
    </header>
  );
};