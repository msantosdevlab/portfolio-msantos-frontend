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
            <div className="max-w-6xl mx-auto items-center justify-between flex flex-col md:flex-row">

                <div className="columns-1 w-5/6">
                    <h2 className="text-title font-title dark:text-gray-300 text-blackSecondary max-w-2xl uppercase pb-0">
                      Contato
                    </h2>
                    <p className="text-subtitle dark:text-dark-subtitle text-light-subtitle">
                    Estou disponível para conversar!  </p>
                    <p className="text-subtitle dark:text-dark-subtitle text-light-subtitle">
                    Se tiver alguma pergunta ou quiser entrar em contato, envie uma mensagem pelo chat agora mesmo.</p>
                </div>

                <div className="columns-1">
                  <button 
                      onClick={loadTawk} className="btn-default">
                      <ChatIcon sx={{ fontSize: 25 }} /> Exibir Chat
                  </button> 
                </div>
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
            </div>
        </section>
    );
}