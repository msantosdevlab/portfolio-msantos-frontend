import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import DOMPurify from 'dompurify';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection({ data = {}, projects = [], categories = [] }) {
    if (!data) return null;

    const [value, setValue] = useState("1"); // "Todos" tem ID 1
    const theme = useTheme();

    // Sanitizando o conteúdo HTML para segurança
    const sanitizedDescription = DOMPurify.sanitize(data.description ?? "No content");
    const description = parse(sanitizedDescription);
    
    // Ordena as categorias para garantir que "Todos" fique sempre na frente
    const sortedCategories = categories.sort((a, b) => a.id - b.id);

    // Função para controlar a aba selecionada
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
            <TabContext value={value}>
               <Box 
                  sx={{ 
                     borderBottom: 1, 
                     borderColor: "divider", 
                     width: { xs: "100%", md: "60%" },
                     margin: "0 auto"
                  }}
               >
                  <TabList
                     onChange={handleChange}
                     aria-label="Tech Stack Tabs"
                     variant="scrollable"
                     scrollButtons="auto"
                     sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        "& .MuiTab-root": {
                           color: theme.palette.text.primary,
                           fontWeight: "bold",
                           minWidth: "80px",
                           flex: "1 1 auto",
                           "&.Mui-selected": { color: theme.palette.text.primary },
                        },
                        "& .MuiTabs-indicator": {
                           background:
                              "linear-gradient(95deg, var(--color-primary) 15%, var(--color-tertiary) 45%, var(--color-pink) 75%, var(--color-secondary) 100%) 35%/200% 100%",
                        },
                     }}
                  >
                     {sortedCategories.map(({ id, name }) => (
                        <Tab key={id} label={name} value={String(id)} />
                     ))}
                  </TabList>
               </Box>

               {/* Exibindo os projetos filtrados */}
               {sortedCategories.map(({ id, name }) => {
                  // Se estiver na aba "Todos" (ID 1), exibir todos os projetos
                  const filteredProjects = id === 1 
                     ? projects 
                     : projects.filter(project => project.category === name);

                  return (
                     <TabPanel key={id} value={String(id)}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                           {filteredProjects.map((project, projectIndex) => (
                              <ProjectCard
                                 key={projectIndex}
                                 project={project}
                                 id={projectIndex}
                                 btn_detail={data.text_btn_detail}
                                 btn_preview={data.text_link_preview}
                              />
                           ))}
                        </div>
                     </TabPanel>
                  );
               })}
            </TabContext>
         </div>
      </section>
    );
}
