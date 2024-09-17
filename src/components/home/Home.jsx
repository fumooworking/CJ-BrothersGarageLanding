import { useState } from "react"

const Home = () => {
    const [position, setPosition] = useState(1)


    const sliders = [
        {
            'img':'./home/slider-1.png',
            'title-1': 'REPARACIÓN DE AUTOMOVILES',
            'title-2': 'MANTENIMIENTOS',
            'text': 'Nuestro equipo de técnicos certificados está aquí para ofrecer servicios de reparación de automóviles de primera calidad y mantenimiento para garantizar que tu vehículo funcione al máximo.'
        },

        {
            'img':'./home/slider-2.png',
            "title-1": "MECÁNICA DE CONFIANZA",
            "title-2": "TU COCHE, COMO NUEVO",
            "text": "¡Confiabilidad, velocidad y calidad! Deja tu auto en manos de los mejores y llévalo como nuevo. Nuestro equipo certificado te asegura un servicio impecable, para que sigas rodando sin preocupaciones."
          }
    ]

    return (
        <div>
            <img src={sliders[position]["img"]} alt="slider" className="absolute custom-height w-full left-0 top-0" />
            <div className="max-w-sm sm:max-w-sm">
                <div className="absolute flex items-center h-full mt-[1%] max-w-custom left-24">
                    <div className="box-border">
                        <div className="text-white">
                            <h1 className="text-42px">{sliders[position]["title-1"]}</h1>
                            <h1 className="text-42px">{sliders[position]["title-2"]}</h1>
                            <p className="text-lg">
                                {sliders[position]["text"]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home
