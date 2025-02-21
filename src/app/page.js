"use client";
import React, { useState, useEffect } from 'react';
import { useFetchData } from "@/hooks/useFetchData";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, LinearProgress, Typography } from '@mui/material';
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
  const [language, setLanguage] = useState("pt"); // Estado para controlar o idioma

  // Chama o useFetchData passando o idioma selecionado
  const { data, loading, error } = useFetchData("content", language);

  useEffect(() => {
    // Carregar o script do Tawk
    const script = document.createElement("script");
    script.id = "tawk-to";
    script.async = true;
    script.src = `${process.env.NEXT_PUBLIC_API_TAWK}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    script.onload = () => {
      console.log("Tawk chat script loaded!");
    };

    // Adiciona o script à página
    document.head.appendChild(script);

    // Limpeza
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Só roda uma vez quando o componente é montado

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
      <section className="dark:dark:bg-darkPrimary bg-light-primary loader-area flex flex-col justify-center items-center min-h-screen gap-2">
        <LinearProgress
          sx={{
            width: "50%",
            height: "1px",
            borderRadius: "4px",
            background: "linear-gradient(95deg, var(--color-lightBlue) 15%, var(--color-lightPink) 45%, var(--color-secondaryAlt) 75%, var(--color-secondary))",
          }}
        />
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            animation: "blink 3.5s infinite"
          }}
          className="dark:text-gray-200 text-black"
        >
          Loading...
        </Typography>
      </section>
    );
  }

  // Extraindo os dados da API
  const { menu, introduction, project_content, project_categories, projects, linkedin, contact, footer } = data || {};

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
      {/* Passando o estado language e a função setLanguage para Navbar */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} language={language} setLanguage={setLanguage} menu={ menu } />
      
      {introduction && <Introduction data={ introduction } />}
      {project_content && project_categories && projects && (
        <ProjectsSection data={project_content} projects={projects} categories={project_categories} />
      )}
      {linkedin && <LinkedinProfile data={ linkedin } />}
      {contact && <Contact data={ contact } />}
      {footer && <Footer data={ footer }/>}
    </ThemeProvider>
  );
}
