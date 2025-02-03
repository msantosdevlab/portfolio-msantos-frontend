"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/navbar/Navbar';
import Introduction from '@/app/components/introduction/Introduction';
import ThemeToggle from '@/app/components/ThemeToggle';


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  

  const projects = [
    { title: "Skilled e-learning", type: "Landing Page", tech: ["HTML", "CSS", "JavaScript"], description: "Página sobre fundamentos do HTML & CSS", category: "Backend" },
    { title: "Stilo", type: "Landing Page", tech: ["HTML", "CSS", "JavaScript"], description: "Página para aprofundar fundamentos", category: "Backend" },
    { title: "Calculadora", type: "Web App", tech: ["HTML", "CSS", "JavaScript", "PHP"], description: "Uma calculadora funcional", category: "Fronted" },
    { title: "Equalizer", type: "Landing Page", tech: ["HTML", "CSS", "REACT"], description: "Um projeto de equalizador de áudio", category: "Salesforce" }
  ];

  return (
      <>
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Introduction />
      </>
  );
}
