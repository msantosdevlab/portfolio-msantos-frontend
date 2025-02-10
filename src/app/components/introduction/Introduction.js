import React from 'react';
import LayersIcon from '@mui/icons-material/Layers';
import Typography from '@mui/material/Typography';
import DOMPurify from 'dompurify';

export default function Introduction({ data }) {
    if (!data) return null; // Se os dados não existirem, não renderiza nada

    // Sanitizando o conteúdo HTML para segurança
    const sanitizedDescription = DOMPurify.sanitize(data.description ?? "No content");

    return (
        <section className="dark:bg-dark-primary bg-light-primary pt-28 pb-20" id="introduction">
            <div className="container max-w-6xl mx-auto px-4 md:py-8 flex flex-col items-center">
                <p className="dark:text-gray-200 text-black mb-2">{data.eyebrow ?? "No content"}</p>      
                <h1 className="text-gradient text-4xl md:text-5xl font-bold mb-4">
                    {data.title ?? "No content"}
                </h1>
                <Typography
                    className="dark:text-gray-200 text-black mb-6 max-w-2xl text-center"
                    dangerouslySetInnerHTML={{ __html: sanitizedDescription }} 
                />
                <a href="#projects" className="btn-default">
                    <p> <LayersIcon sx={{ fontSize: 25 }} /> {data.button_text ?? "No content"} </p>
                </a>
            </div>
        </section>
    );
}
