import React from 'react';
import LayersIcon from '@mui/icons-material/Layers';
import parse from "html-react-parser";
import DOMPurify from 'dompurify';

export default function Introduction({ data }) {
    if (!data) return null; // Se os dados não existirem, não renderiza nada

    // Sanitizando o conteúdo HTML para segurança
    const sanitizedDescription = DOMPurify.sanitize(data.description ?? "No content");
    const description = parse(sanitizedDescription)

    return (
      <section id="introduction" className="pt-28 pb-20 dark:bg-darkPrimary g-lightPrimary">
        <div className="container mx-auto max-w-6xl px-4 md:py-8 flex flex-col items-center">
          <p className="mb-2 text-black dark:text-gray-200">
            {data.eyebrow ?? "No content"}
          </p>
          <h1 className="mb-4 font-bold text-5xl sm:text-6xl md:text-5xl lg:text-6xl">
            {data.title ?? "No content"}
          </h1>
          <div className="mb-4 max-w-2xl text-center text-black dark:text-gray-200">
            {description}
          </div>
          <a href="#projects" className="btn-default">
            <span>
              <LayersIcon sx={{ fontSize: 25 }} /> {data.button_text ?? "No content"}
            </span>
          </a>
        </div>
      </section>
    );
}
