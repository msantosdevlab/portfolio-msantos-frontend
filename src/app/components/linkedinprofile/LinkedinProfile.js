import * as React from 'react';
import { LinkedIn } from "@mui/icons-material";
import parse from "html-react-parser";
import DOMPurify from 'dompurify';

export default function LinkedinProfile({ data }) {
    if (!data) return null;

    // Sanitizando o conteúdo HTML para segurança
    const sanitizedTitle = DOMPurify.sanitize(data.title ?? "No content");
    const title = parse(sanitizedTitle)

    const sanitizedDescription = DOMPurify.sanitize(data.description ?? "No content");
    const description = parse(sanitizedDescription)

    return (
      <section id="linkedinprofile" className="py-20 bg-light-primary dark:bg-darkPrimary">
         <div className="container mx-auto max-w-6xl px-4 py-8 flex flex-col items-center justify-between">
            <div className="title linkedinsection text-center font-title uppercase text-blackSecondary dark:text-gray-300">
               { title }
            </div>
            <div className="subtitle text-subtitle mb-6 max-w-2xl text-center text-light-subtitle dark:text-dark-subtitle">
               { description }
            </div>
            <a href={data.button_href} target={data.button_target} className="btn-default" >
               <span> <LinkedIn sx={{ fontSize: 25 }} /> {data.button_text} </span>
            </a>
         </div>
      </section>
    );
}