import { Tabs, Tab } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import React, { useState } from 'react';
// components/ProjectsSection.js
import { ProjectCard } from './ProjectCard';

export function ProjectsSection({ projects }) {
    const [value, setValue] = useState(0);
    const theme = useTheme();
  
    // Função para controlar a aba selecionada
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    // Filtrando os projetos por categorias
    const categories = ['Todos', 'Backend', 'Fronted', 'Salesforce']; 
    const filteredProjects = projects.filter((project) => {
      if (value === 0) return true; // Se a aba selecionada for "All", mostrar todos os projetos
        return project.category === categories[value]; // Caso contrário, filtrar por categoria
    });
  
    return (
      <section className="dark:bg-dark-secondary bg-light-secondary pt-18 pb-28" id="projects">
        <div className="container max-w-6xl mx-auto p-3 lg:px-8">
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-title font-title text-center dark:text-dark-title uppercase">Projetos</h2>
            <p className="subtitle dark:text-dark-subtitle text-light-subtitle max-w-2xl text-center">
            Explore meu portfólio e veja como transformo teoria em prática por meio de projetos reais e funcionais.
            </p>

          </div>

          {/* Tabs para navegação entre categorias de projetos */}
          <Tabs value={value} onChange={handleChange} centered textColor="inherit" sx={{
            "& .MuiTab-root": {
                color: theme.palette.text.primary, 
                fontWeight: "bold", 
                "&.Mui-selected": {
                    color: theme.palette.text.primary,
                },
            },
            "& .MuiTabs-indicator": {
                background: "linear-gradient(95deg, var(--color-primary) 15%, var(--color-tertiary) 45%, var(--color-pink) 75%, var(--color-secondary) 100%) 35%/200% 100%",
            }
            }} >
            <Tab label="Todos" />
            <Tab label="Backend" />
            <Tab label="Fronted" />
            <Tab label="Salesforce" />
          </Tabs>
  
          {/* Exibindo os projetos filtrados conforme a aba selecionada */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} id={index} />
            ))}
          </div>
  
        </div>
      </section>
    );
  }
  