import Image from 'next/image';
import imageDefault from '@/app/assets/images/default_image.png';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ProjectModal from "./ProjectModal";
import parse from "html-react-parser";
import DOMPurify from 'dompurify';

export function ProjectCard({ project, id }) {
  if (!project) return null; // Evita erro caso project seja undefined
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Sanitizando o conteúdo HTML para segurança
    const sanitizedDescription = DOMPurify.sanitize(project.short_description ?? "No content");
    const short_description = parse(sanitizedDescription)

    const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    };

    const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    };

  return (
      <div
      className="rounded-lg p-5 dark:bg-darkPrimary g-lightPrimary"
      data-aos="fade-up"
      data-aos-duration={400 + id * 500}
      data-aos-easing="ease-in-out"
      >
      {/* Imagem do projeto */}
      <div className="mb-4 aspect-video rounded-lg bg-gray-200 dark:bg-gray-700">
         <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
            <Image
               src={
                  project.thumbnail
                  ? `${process.env.NEXT_PUBLIC_IMAGE}${project.thumbnail}`
                  : imageDefault
               }
               alt={project.title || "Imagem do projeto"}
               layout="fill" // Faz com que a imagem preencha todo o container
               objectFit="cover" // Mantém a imagem como "cover"
            />
         </div>
      </div>
    
      {/* Título do projeto */}
      <h3 className="mb-2 text-xl font-bold dark:text-white">
        {project.title ?? "Untitled"}
      </h3>
    
      {/* Descrição do projeto */}
      <div className="min-h-[6rem] text-sm text-black dark:text-white">
        { short_description }
      </div>
    
      {/* Tags (tecnologias utilizadas) */}
      <div>
        <span className="text-xs font-semibold text-light-subtitle dark:text-dark-subtitle">
          Stack:
        </span>
        <div className="mt-2 mb-4 flex flex-wrap gap-2">
          {(project.techs ?? []).map((tech, index) => (
            <span
              key={index}
              className="rounded-full px-3 py-1 text-sm text-black dark:text-white dark:bg-darkSecondary bg-lightSecondary"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    
      {/* Links Externos */}
      <div>
        <span className="text-xs font-semibold text-light-subtitle dark:text-dark-subtitle">
          Links:
        </span>
        <div className="mt-2 mb-4 flex justify-between text-sm text-light-subtitle dark:text-dark-subtitle">
          <a href={ project.link_rep_git } className="transition-all duration-600 text-black dark:text-white hover:text-pinkLogo dark:hover:text-pinkLogo">
            <GitHubIcon sx={{ fontSize: 25 }} />
            <span> GitHub</span>
          </a>
          <a href={ project.link_preview } className="transition-all duration-600 text-black dark:text-white hover:text-pinkLogo dark:hover:text-pinkLogo">
            <LaunchIcon sx={{ fontSize: 25 }} />
            <span> ver o projeto</span>
          </a>
        </div>
      </div>
    
      {/* Link Modal */}
      <div className="w-full pt-2">
         <Button
         key={project.id}
         onClick={() => openModal(project)}
         sx={(theme) => ({
            cursor: 'pointer',
            width: '100%',
            px: 2,
            py: 1,
            border: '1px solid',
            borderColor:
               theme.palette.mode === 'light'
               ? theme.palette.common.black
               : theme.palette.common.white,
            color:
               theme.palette.mode === 'light'
               ? theme.palette.common.black
               : theme.palette.common.white,
            transition: 'all 500ms',
            '&:hover': {
               backgroundColor:
               theme.palette.mode === 'light'
                  ? theme.palette.common.black
                  : theme.palette.common.white,
               color:
               theme.palette.mode === 'light'
                  ? theme.palette.common.white
                  : theme.palette.common.black,
               borderColor:
               theme.palette.mode === 'light'
                  ? theme.palette.common.white
                  : theme.palette.common.black,
            },
         })}
         >
         ver mais detalhes
         </Button>

      </div>
    
      {/* Modal */}
      <ProjectModal open={modalOpen} onClose={closeModal} project={selectedProject} />
    </div>  
  );
}
