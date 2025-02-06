import LayersIcon from '@mui/icons-material/Layers';
export default function Introduction() {
    return (
        <section className="dark:bg-dark-primary bg-light-primary pt-28 pb-20" id="introduction">
            <div className="container max-w-6xl mx-auto px-4 md:py-8 flex flex-col items-center">
                <p className="dark:text-gray-200  text-black mb-2">Olá, meu nome é </p>      
                <h1 className="text-gradient text-4xl md:text-5xl font-bold mb-4">
                    Mônica Santos
                </h1>
                <p className="dark:text-gray-200 text-black mb-6 max-w-2xl text-center">
                Com mais de uma década gerenciando projetos web, migrei para a programação para unir visão estratégica e habilidades técnicas.
                </p>
                <p className="dark:text-gray-200 text-black mb-6 max-w-2xl text-center">
                Em 2024, concluí o Curso Técnico em Programação de Sistemas e, desde então, venho aprimorando minhas habilidades com projetos práticos.
                </p>
                <a href="#projects" className="btn-default">
                    <p> <LayersIcon sx={{ fontSize: 25 }} /> Confira meus últimos trabalhos  </p>
                </a>
            </div>
        </section>
    );
}