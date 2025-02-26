import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconButton, Drawer, Button } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import ThemeToggle from '../ThemeToggle';
import LanguageToggle from '../LanguageToggle';

export default function Navbar({ darkMode, toggleTheme, language, setLanguage, menu }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.5 }; // Quando 50% da seção estiver visível

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Atualiza a seção ativa
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="dark:bg-darkPrimary bg-lightPrimary border-b dark:border-[#050505] border-gray-100 fixed w-full z-[1000] shadow-(--shadow-light)">
      <div className="container mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
        <div className="text-2xl font-bold text-pinkLogo">
          <a href="#introduction"><span className="dark:text-gray-300  text-black ">M</span>SANTOS<span className="dark:text-gray-300  text-black ">LAB</span></a>
        </div>

        <nav className="gap-8 font-bold uppercase items-center hidden md:flex cursor-pointer">
          {menu && menu.length > 0 ? (
            menu
              .sort((a, b) => a.order - b.order)
              .map(({ name, label }) => (
                <Link
                  key={name}
                  href={`#${name}`}
                  className={
                    activeSection === name
                      ? 'text-pinkLogo'
                      : 'dark:text-gray-300 text-black hover:text-pinkLogo dark:hover:text-pinkLogo'
                  }
                >
                  {label}
                </Link>
              ))
              ) : (
            <span>Menu</span>
          )}


        <div className="flex gap-2">
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>


        </nav>

        <div className="block md:hidden">
          <Button onClick={toggleDrawer(true)}><MenuIcon className="dark:text-gray-300  text-black mx-auto" /></Button>
        </div>
      </div>
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <div className="dark:bg-darkPrimary bg-lightPrimary w-64 p-4 h-full">
          <div className="flex justify-between items-center mb-6">
            <div className="font-bold dark:text-gray-300 text-gray-700">Menu</div>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon className="text-gray-800 dark:text-white cursor-pointer" />
            </IconButton>
          </div>
          <nav className="flex flex-col md:hidden gap-5 uppercase font-bold">
          {menu && menu.length > 0 ? (
              menu.map(({ id, name, label }) => (
                <Link key={id} href={`#${name}`} className="dark:text-gray-300 text-black hover:text-pinkLogo dark:hover:text-pinkLogo">
                  {label}
                </Link>
              ))
            ) : (
              <span>Menu</span>
            )}
            <div className="w-1 flex gap-4">
              <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
              <LanguageToggle language={language} setLanguage={setLanguage} />
            </div>
          </nav>
        </div> 
      </Drawer>
    </header>
  );
};
