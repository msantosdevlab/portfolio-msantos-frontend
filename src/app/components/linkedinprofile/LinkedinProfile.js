import * as React from 'react';
import { LinkedIn } from "@mui/icons-material";

export default function LinkedinProfile() {
    return (
        <section className="dark:bg-dark-primary bg-light-primary pt-20 pb-20" id="linkedinarea">
            <div className="container max-w-6xl mx-auto px-4 py-8 flex flex-col items-center justify-between">
                 <h2 className="text-center dark:text-gray-300 text-blackSecondary uppercase"> 
                 Lorem Ipsum is simply dummy text
                </h2>
                <p className="dark:custom-p custom-p mb-6 max-w-2xl text-center">
                Of the printing and typesetting industry. Lorem Ipsum has been the industry.   
                </p>
                <a href="https://linkedin.com" target="_blank" className="btn-default">
                    <p> <LinkedIn sx={{ fontSize: 25 }} /> Ver Perfil</p>
                </a>
            </div>
 
        </section>
    );
}