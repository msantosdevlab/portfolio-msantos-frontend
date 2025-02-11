"use client";
import Image from 'next/image';
import imageDefault from '@/app/assets/images/default_image.png';
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { X } from "lucide-react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import DOMPurify from 'dompurify';

export default function ProjectModal({ open, onClose, project }) {
  if (!project) return null;

    // Sanitizando o conteúdo HTML para segurança
    const sanitizedDescriptionLeft = DOMPurify.sanitize(project.description_left ?? "No content");
    const sanitizedDescriptionRight = DOMPurify.sanitize(project.description_right ?? "No content");

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth scroll="body" >
      <DialogTitle className="flex justify-end items-center py-0 dark:bg-dark-secondary bg-light-secondary  border-b dark:border-[#050505] border-gray-100">
        <IconButton onClick={onClose}>
          <X size={24} />
        </IconButton>
      </DialogTitle>
      <DialogContent 
      className="dark:bg-dark-secondary bg-light-secondary pt-10"
        style={{
          height: "calc(90vh - 64px)", // Considerando a altura do título e o botão de fechar
        }}>
        
        <div className="flex gap-5 mt-6">
            <div className="w-5/12">
                <Image
                src={project.thumbnail ? `${process.env.NEXT_PUBLIC_IMAGE}${project.thumbnail}` : imageDefault}
                alt={project.title || "Imagem do projeto"}
                width={500} 
                height={325}
                className="object-cover" 
                />

                <div className="description">
                    <div className="dark:text-white text-black min-h-[6rem]" dangerouslySetInnerHTML={{ __html: sanitizedDescriptionLeft }} >
                    </div>
                </div>

                {/* Links Externos */}
                <div className="mt-4">
                    <span className="text-xs font-semibold dark:text-dark-subtitle text-light-subtitle">Links:</span>
                    <div className="flex gap-10 mt-2 mb-4 text-sm dark:text-dark-subtitle text-light-subtitle">
                    <a href="" className="dark:text-white text-black hover:text-pinkLogo dark:hover:text-pinkLogo transition-all duration-600"> <GitHubIcon sx={{ fontSize: 25 }} /><span> GitHub</span></a>
                    <a href="" className="dark:text-white text-black hover:text-pinkLogo dark:hover:text-pinkLogo transition-all duration-600"><LaunchIcon sx={{ fontSize: 25 }} /><span> ver o projeto</span></a>       
                    </div>
                </div>
            </div>

            <div className="w-7/12">
                {/* Titulo do projeto */}
                <div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title ?? "Untitled"}</h3>
                </div>

                {/* Descrição do projeto */}
                <div className="description">
                    <div className="dark:text-white text-black min-h-[6rem] dialog-content" dangerouslySetInnerHTML={{ __html: sanitizedDescriptionRight }} >
                    </div>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
