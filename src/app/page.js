"use client";
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from '@/app/components/navbar/Navbar';
import Introduction from '@/app/components/introduction/Introduction';
import { ProjectsSection } from '@/app/components/projects/ProjectsSection';
import LinkedinProfile from '@/app/components/linkedinprofile/LinkedinProfile';
import Contact from '@/app/components/contact/Contact';
import Footer from '@/app/components/footer/Footer';
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
    { title: "FeedPortugal", type: "Landing Page", tech: ["React", "Vite", "HTML", "CSS"], description: "O projeto Feed Portugal é uma aplicação web que exibe as últimas notícias de Portugal, provenientes de diversas sites de notícias, utilizando a API pública do GNews.", image:"", category: "Fronted", link_rep: "https://github.com/msantosdevlab/feed-portugal", link_view: "https://feed-pt.msantos.site/" },
    { title: "Stilo", type: "Landing Page", tech: ["HTML", "CSS", "JavaScript"], description: "Página para aprofundar fundamentos", image:"", category: "Backend", link_rep: "", link_view: "" },
    { title: "Calculadora", type: "Web App", tech: ["HTML", "CSS", "JavaScript", "PHP"], description: "Uma calculadora funcional",  image:"", category: "Fronted", link_rep: "", link_view: ""  },
    { title: "Equalizer", type: "Landing Page", tech: ["HTML", "CSS", "REACT"], description: "Um projeto de equalizador de áudio",  image:"", category: "Salesforce", link_rep: "", link_view: ""  }
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
      fontFamily: "Poppins",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Introduction />
      <ProjectsSection projects={projects} />
      <LinkedinProfile />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
