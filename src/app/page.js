"use client";
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from '@/app/components/navbar/Navbar';
import Introduction from '@/app/components/introduction/Introduction';
import { ProjectsSection } from '@/app/components/projects/ProjectsSection';
import ThemeToggle from '@/app/components/ThemeToggle';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    document.documentElement.classList.add('dark');
    AOS.init({ once: false });
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

  // CCreating a customized MUI theme
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", 
      primary: {
        main: darkMode ? "#fff" : "#000",
      },
      secondary: {
        main: "#03a9f4",
      },
    },
    typography: {
      fontFamily: "Arial",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Introduction />
      <ProjectsSection projects={projects} />
    </ThemeProvider>
  );
}
