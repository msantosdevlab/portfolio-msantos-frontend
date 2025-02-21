import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import DOMPurify from 'dompurify';
import { ProjectCard } from './ProjectCard';


export function ProjectsSection({ data = {}, projects = [], categories = [] }) {
    if(!data) return null;

    const [value, setValue] = useState(0);
    const theme = useTheme();

    // Sanitizando o conteúdo HTML para segurança
    const sanitizedDescription = DOMPurify.sanitize(data.description ?? "No content");
    const description = parse(sanitizedDescription)
    
    // Garante que as categorias recebidas da API sejam únicas
    const uniqueCategories = categories.map(cat => cat.name).filter(Boolean);

    // Função para controlar a aba selecionada
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Filtrando os projetos pela categoria selecionada
    const filteredProjects = projects.filter((project) => {
        if (value === 0) return true; // Se for "0 - Todos", exibir todos os projetos
        return project.category === uniqueCategories[value]; // Filtrar pela categoria selecionada
    });

    return (
      <section id="projects" className="pt-18 pb-28 dark:bg-darkSecondary bg-lightSecondary">
         <div className="container mx-auto max-w-6xl p-3 lg:px-8">
            <div className="flex flex-col items-center mb-6">
               <h2 className="title text-center uppercase dark:text-dark-title">
                  {data.title}
               </h2>
               <div className="subtitle text-center max-w-2xl dark:text-dark-subtitle text-light-subtitle">
                  {description}
               </div>
            </div>

            {/* Tabs para navegação entre categorias */}
            <Tabs
               value={value}
               onChange={handleChange}
               centered
               textColor="inherit"
               sx={{
               "& .MuiTab-root": {
                  color: theme.palette.text.primary,
                  fontWeight: "bold",
                  "&.Mui-selected": { color: theme.palette.text.primary },
               },
               "& .MuiTabs-indicator": {
                  background:
                     "linear-gradient(95deg, var(--color-primary) 15%, var(--color-tertiary) 45%, var(--color-pink) 75%, var(--color-secondary) 100%) 35%/200% 100%",
               },
               }}>
               {uniqueCategories.map((category, index) => (
               <Tab key={index} label={category} />
               ))}
            </Tabs>

            {/* Exibindo os projetos filtrados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredProjects.map((project, index) => (
               <ProjectCard key={index} project={project} id={index} btn_detail={data.text_btn_detail} btn_preview={data.text_link_preview} />
            ))}
            
            </div>
         </div>
      </section>

    );
}
