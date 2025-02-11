import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import DOMPurify from 'dompurify';
import { ProjectCard } from './ProjectCard';


export function ProjectsSection({ title = {}, projects = [], categories = [] }) {
    if(!title) return null;

    const [value, setValue] = useState(0);
    const theme = useTheme();

    // Sanitizando o conteúdo HTML para segurança
    const sanitizedDescription = DOMPurify.sanitize(title.description ?? "No content");

    // Garante que as categorias recebidas da API sejam únicas
    const uniqueCategories = categories.map(cat => cat.name).filter(Boolean);
    console.log('uniqueCategories: ', uniqueCategories)

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
        <section className="dark:bg-dark-secondary bg-light-secondary pt-18 pb-28" id="projects">
            <div className="container max-w-6xl mx-auto p-3 lg:px-8">
                <div className="flex flex-col items-center mb-6">
                    <h2 className="text-title font-title text-center dark:text-dark-title uppercase">{ title.title }</h2>
                    <p className="subtitle dark:text-dark-subtitle text-light-subtitle max-w-2xl text-center"
                        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></p>
                </div>

                {/* Tabs para navegação entre categorias */}
                <Tabs value={value} onChange={handleChange} centered textColor="inherit" 
                    sx={{
                        "& .MuiTab-root": {
                            color: theme.palette.text.primary,
                            fontWeight: "bold",
                            "&.Mui-selected": { color: theme.palette.text.primary },
                        },
                        "& .MuiTabs-indicator": {
                            background: "linear-gradient(95deg, var(--color-primary) 15%, var(--color-tertiary) 45%, var(--color-pink) 75%, var(--color-secondary) 100%) 35%/200% 100%",
                        }
                    }}>
                    {uniqueCategories.map((category, index) => (
                        <Tab key={index} label={category} />
                    ))}
                </Tabs>

                {/* Exibindo os projetos filtrados */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} id={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
