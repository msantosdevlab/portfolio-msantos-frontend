"use client";
import Image from 'next/image';
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { X } from "lucide-react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import DOMPurify from 'dompurify';

export default function ProjectModal({ open, onClose, project, btn_preview }) {
  if (!project) return null;
  const imageDefault = `${process.env.NEXT_PUBLIC_IMAGE}/projectsimages/default_image.png`;

  // Sanitizando o conteúdo HTML para segurança
  const sanitizedDescriptionLeft = DOMPurify.sanitize(project.description_left ?? "No content");
  const sanitizedDescriptionRight = DOMPurify.sanitize(project.description_right ?? "No content");

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth scroll="body">
      <DialogTitle className="flex items-center justify-end py-0 bg-lightSecondary dark:bg-darkSecondary border-b border-gray-100 dark:border-[#050505]">
        <IconButton onClick={onClose}>
          <X size={24} />
        </IconButton>
      </DialogTitle>
      <DialogContent
        className="pt-10 bg-lightSecondary dark:bg-darkSecondary"
        style={{ height: "calc(90vh - 64px)" }} // Considerando a altura do título e do botão de fechar
      >
        <div className="mt-6 flex flex-col md:flex-row gap-5">
          {/* Imagem */}
          <div className="w-full md:w-5/12">
            <Image
              src={
                project.thumbnail
                  ? `${process.env.NEXT_PUBLIC_IMAGE}${project.thumbnail}`
                  : imageDefault
              }
              alt={project.title || "Project image"}
              width={500}
              height={325}
              className="object-cover w-full"
            />
          </div>

          {/* Coluna Direita - Título e Descrição */}
          <div className="w-full md:w-7/12">
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              {project.title ?? "Untitled"}
            </h3>
            <div className="description">
              <div
                className="min-h-[6rem] dialog-content text-black dark:text-white"
                dangerouslySetInnerHTML={{ __html: sanitizedDescriptionRight }}
              />
            </div>
          </div>
        </div>

        {/* Coluna Esquerda - Descrição Adicional e Links */}
        <div className="mt-6 w-full md:w-5/12">
          <div className="description">
            <div
              className="min-h-[6rem] text-black dark:text-white"
              dangerouslySetInnerHTML={{ __html: sanitizedDescriptionLeft }}
            />
          </div>

          {/* Links Externos */}
          <div className="mt-4">
            <span className="text-xs font-semibold text-light-subtitle dark:text-dark-subtitle">
              Links:
            </span>
            <div className="mt-2 mb-4 flex gap-10 text-sm text-light-subtitle dark:text-dark-subtitle">
              <a
                href={project.link_rep_git}
                className="transition-all duration-600 text-black dark:text-white hover:text-pinkLogo dark:hover:text-pinkLogo"
                target="_blank"
              >
                <GitHubIcon sx={{ fontSize: 25 }} />
                <span> GitHub</span>
              </a>
              <a
                href={project.link_preview}
                className="transition-all duration-600 text-black dark:text-white hover:text-pinkLogo dark:hover:text-pinkLogo"
                target="_blank"
              >
                <LaunchIcon sx={{ fontSize: 25 }} />
                <span> {btn_preview}</span>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
