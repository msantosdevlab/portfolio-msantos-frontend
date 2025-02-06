import * as React from 'react';
import { LinkedIn } from "@mui/icons-material";

export default function LinkedinProfile() {
    return (
        <section className="dark:bg-dark-primary bg-light-primary py-20" id="linkedinprofile">
            <div className="container max-w-6xl mx-auto px-4 py-8 flex flex-col justify-between items-center">
                 <h2 className="text-title font-title text-center dark:text-gray-300 text-blackSecondary uppercase"> 
                    Acesse o meu <span className='text-gradient'> LinkedIn</span>!
                </h2>
                <p className="text-subtitle mb-6 max-w-2xl text-center dark:text-dark-subtitle text-light-subtitle ">
                Quer saber mais sobre minha experiência e trajetória? <br /> Acesse meu perfil completo.
                </p>
                <a href="https://www.linkedin.com/in/msantosdev/" target="_blank" className="btn-default">
                    <p> <LinkedIn sx={{ fontSize: 25 }} /> Ver Perfil</p>
                </a>
            </div>
 
        </section>
    );
}