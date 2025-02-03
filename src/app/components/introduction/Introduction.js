import LayersIcon from '@mui/icons-material/Layers';

export default function Introduction() {
    return (
        <section className="dark:bg-dark-primary bg-light-primary pt-28 pb-20" id="introduction">
            <div className="container max-w-6xl mx-auto px-4 py-8 banner flex flex-col items-center">
                <p className="dark:text-white text-black mb-2">De dónde viene,</p>
                <h1 className="text-gradient text-4xl md:text-5xl font-bold mb-4">
                    Mônica Santos
                </h1>
                <p className="dark:text-gray-300  text-black  mb-6 max-w-2xl text-center">
                Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clsica de la literatura del Latin.
                </p>
                <p className="dark:text-gray-300 text-black mb-6 max-w-2xl text-center">
                Que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia.
                </p>
                <a href="#portfolio" className="btn-default">
                    <p> <LayersIcon sx={{ fontSize: 25 }} /> Lorem Ipsum </p>
                </a>
            </div>
        </section>
    );
}