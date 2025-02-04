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
    <header className="dark:bg-dark-primary bg-light-primary border-b dark:border-[#050505] border-gray-100 fixed w-full z-[1000] shadow-(--shadow-light)">
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="text-2xl font-bold text-pinkLogo">
            <a href="/">M<span className="dark:text-gray-300  text-black ">SANTOS</span></a>
        </div>

      <nav className="gap-8 font-bold uppercase items-center hidden md:flex">
        <a href="#introduction" className="dark:text-gray-300  text-black hover:text-pinkLogo dark:hover:text-pinkLogo active:text-pinkLogo transition-colors duration-500">Olá</a>
        <a href="#projects" className="dark:text-gray-300  text-black hover:text-pinkLogo dark:hover:text-pinkLogo active:text-pinkLogo transition-colors duration-500">Projetos</a>
        <a href="#contact" className="dark:text-gray-300  text-black hover:text-pinkLogo dark:hover:text-pinkLogo active:text-pinkLogo transition-colors duration-500">Contato</a>
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      </nav>

        <div className="block md:hidden">
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
          <nav className="flex flex-col md:hidden gap-5 uppercase font-bold">
            <a href="#introduction" className="dark:text-gray-300  text-black hover:text-pinkLogo dark:hover:text-pinkLogo active:text-pinkLogo">Olá</a>
            <a href="#projects" className="dark:text-gray-300  text-black hover:text-pinkLogo dark:hover:text-pinkLogo active:text-pinkLogo">Projetos</a>
            <a href="#contact" className="dark:text-gray-300  text-black hover:text-pinkLogo dark:hover:text-pinkLogo active:text-pinkLogo">Contato</a>
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </nav>
        </div> 
      </Drawer>
    </header>
  );
};