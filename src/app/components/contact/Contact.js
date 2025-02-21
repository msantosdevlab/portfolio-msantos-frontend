import Script from "next/script";
import { useState } from "react";
import ChatIcon from '@mui/icons-material/Chat';
import parse from "html-react-parser";
import DOMPurify from 'dompurify';

export default function Contact({ data }) {
   const [isLoaded, setIsLoaded] = useState(true);

   // Sanitizando o conteúdo HTML para segurança
   const sanitizedDescription = DOMPurify.sanitize(data.description ?? "No content");
   const description = parse(sanitizedDescription)
      
   const loadTawk = () => {
      if (isLoaded) {
         // Se o Tawk já foi carregado, apenas abre o chat
         window.Tawk_API.maximize();
         return;
      }
   };

   return(
      <section className="dark:bg-darkSecondary bg-lightSecondary py-20" id="contact">
         <Script
            id="tawk-to"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
               __html: `
               var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
               (function(){
                  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                  s1.async = true;
                  s1.src = "${process.env.NEXT_PUBLIC_API_TAWK}";
                  s1.charset = "UTF-8";
                  s1.setAttribute("crossorigin", "*");
                  s0.parentNode.insertBefore(s1, s0);
               })();
               `,
            }}
         />
         <div className="container mx-auto px-3 lg:px-8 flex flex-col items-center md:w-5/6 lg:flex-row lg:justify-between text-center lg:text-left max-w-6xl">
            <div className="w-full lg:w-7/12">
               <div className="title font-title max-w-2xl dark:text-gray-300 text-blackSecondary uppercase pb-0">
                   { data.title }
               </div>
               <div className="subtitle dark:text-dark-subtitle text-light-subtitle">
                  { description }
               </div>
            </div>
            <div className="w-full mt-4 flex justify-center lg:w-5/12 lg:justify-end">
               <button onClick={loadTawk} className="btn-default cursor-pointer">
                  <ChatIcon sx={{ fontSize: 25 }} /> {data.button_text}
               </button>
            </div>
         </div>
      </section>
   );
}