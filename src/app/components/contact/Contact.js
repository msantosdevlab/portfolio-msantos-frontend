import Script from "next/script";
import { useEffect, useState } from "react";
import ChatIcon from '@mui/icons-material/Chat';

export default function Contact() {
    const [isLoaded, setIsLoaded] = useState(true);
        
    const loadTawk = () => {
        if (isLoaded) {
          // Se o Tawk já foi carregado, apenas abre o chat
          window.Tawk_API.maximize();
          return;
        }
      };
    

    return(
        <section className="dark:bg-dark-secondary bg-light-secondary py-20" id="contact">
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
          }} />
          <div className="container max-w-6xl mx-auto flex flex-col items-center text-center md:w-5/6 md:text-center lg:w-full lg:flex-row lg:justify-between lg:text-left p-3 lg:px-8">          
            <div className="w-full lg:w-7/12">
              <h2 className="text-title font-title max-w-2xl dark:text-gray-300 text-blackSecondary uppercase pb-0">
                Contato
              </h2>
              <p className="text-subtitle dark:text-dark-subtitle text-light-subtitle">
                Estou disponível para conversar!
              </p>
              <p className="text-subtitle dark:text-dark-subtitle text-light-subtitle">
                Se tiver alguma pergunta ou quiser entrar em contato, envie uma mensagem pelo chat agora mesmo.
              </p>
            </div>
            <div className="w-full mt-4 flex justify-center lg:w-5/12 lg:justify-end">
              <button onClick={loadTawk} className="btn-default">
                <ChatIcon sx={{ fontSize: 25 }} /> Exibir Chat
              </button>
            </div>
            </div>
        </section>
    );
}