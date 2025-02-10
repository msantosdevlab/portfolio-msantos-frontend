"use client";
import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, LinearProgress, Typography  } from '@mui/material';
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

  // Exibe a barra de carregamento enquanto os dados não chegam
  if (loading || error) {
    return (
      <section className="dark:bg-dark-primary bg-light-primary loader-area flex flex-col justify-center items-center min-h-screen">
      <LinearProgress
        sx={{
        width: "50%",
          height: "2px",
          borderRadius: "4px",
          background: "linear-gradient(95deg, var(--color-light-blue) 15%, var(--color-light-pink) 45%, var(--color-secondary-alt) 75%, var(--color-secondary))",
        }}
      />
      <Typography
      sx={{
        fontSize: "1rem",
        fontWeight: "bold",
        animation: "blink 3.5s infinite"
      }}
      className="dark:text-gray-200 text-black mt-4"
      >
        Loading...
      </Typography>
    </section>
    );
  }

  // Criando um tema customizado com MUI
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
