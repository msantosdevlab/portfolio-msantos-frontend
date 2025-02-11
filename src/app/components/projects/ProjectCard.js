import Image from 'next/image';
import imageDefault from '@/app/assets/images/default_image.png';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ProjectModal from "./ProjectModal";
import DOMPurify from 'dompurify';

export function ProjectCard({ project, id }) {
  if (!project) return null; // Evita erro caso project seja undefined
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Sanitizando o conteúdo HTML para segurança
    const sanitizedDescription = DOMPurify.sanitize(project.short_description ?? "No content");

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
      className="dark:bg-dark-primary bg-light-primary rounded-lg p-5"
      data-aos="fade-up"
      data-aos-duration={400 + id * 500}
      data-aos-easing="ease-in-out"
    >
     
      {/* Imagem do projeto */}
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4">
        <Image
          src={project.thumbnail ? `${process.env.NEXT_PUBLIC_IMAGE}${project.thumbnail}` : imageDefault}
          alt={project.title || "Imagem do projeto"}
          width={400} 
          height={225}
          className="object-cover" // Garantir que a imagem cubra o container
        />
      </div>
      
      {/* Titulo do projeto */}
      <div>
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title ?? "Untitled"}</h3>
      </div>     

      {/* Descrição do projeto */}
      <div>
        <p className="dark:text-white text-black text-sm min-h-[6rem]" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} >
        </p>
      </div>

      {/* Tags (tecnologias utilizadas no projeto) */}
      <div>
        <span className="text-xs font-semibold dark:text-dark-subtitle text-light-subtitle">Stack:</span>
        <div className="flex gap-2 flex-wrap mt-2 mb-4">
          
          {(project.techs ?? []).map((tech, index) => (
            <span
              key={index}
              className="dark:bg-dark-secondary bg-light-secondary rounded-full text-sm dark:text-white text-black px-3 py-1"
            >
              {tech.name}
            </span>
          ))}
       </div>
      </div>

      {/* Links Externos */}
      <div className="">
        <span className="text-xs font-semibold dark:text-dark-subtitle text-light-subtitle">Links:</span>
        <div className="flex justify-between mt-2 mb-4 text-sm dark:text-dark-subtitle text-light-subtitle">
          <a href="" className="dark:text-white text-black hover:text-pinkLogo dark:hover:text-pinkLogo transition-all duration-600"> <GitHubIcon sx={{ fontSize: 25 }} /><span> GitHub</span></a>
          <a href="" className="dark:text-white text-black hover:text-pinkLogo dark:hover:text-pinkLogo transition-all duration-600"><LaunchIcon sx={{ fontSize: 25 }} /><span> ver o projeto</span></a>       
        </div>
      </div>
      
      {/* Link Modal */}
      <div className="w-full pt-2">
      <Button 
        key={project.id}
        className="cursor-pointer w-full px-4 py-2 border border-solid text-black border-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition-all duration-600"
        onClick={() => openModal(project)}>ver mais detalhes</Button>
      </div>

      {/* Modal */}
      <ProjectModal open={modalOpen} onClose={closeModal} project={selectedProject} />
    </div>
  );
}
