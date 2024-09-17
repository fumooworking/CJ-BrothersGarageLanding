import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="absolute top-0 left-0 w-full z-10 blurred-bg border-b border-gray-500 text-white">
            <div className="container mx-auto flex justify-around items-center py-2">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src="./logo.jpg" alt="Logo" className="h-20" />
                </div>

                {/* Botón hamburguesa */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Enlaces del menú */}
                <div className="hidden lg:flex flex-1 justify-center space-x-16 text-32px tracking-wide">
                    <a href="#" className="relative text-xl">INICIO</a>
                    <a href="#" className="relative text-xl">SERVICIOS</a>
                    <a href="#" className="relative text-xl">NOSOTROS</a>
                    <a href="#" className="relative text-xl">CONTACTO</a>
                </div>

                {/* Teléfono */}
                <div className="hidden lg:block">
                    <a href="tel:+1234567890" className="hover:text-gray-400">📞 +34 611 408 343</a>
                </div>
            </div>

            {/* Menú desplegable para móviles */}
            <div id="mobile-menu" className={`lg:hidden ${isOpen ? 'flex' : 'hidden'} flex-col px-6 pb-4 space-y-2`}>
                <a href="#" className="wave-effect">INICIO</a>
                <a href="#" className="wave-effect">SERVICIOS</a>
                <a href="#" className="wave-effect">NOSOTROS</a>
                <a href="#" className="wave-effect">CONTACTO</a>
            </div>
        </nav>
    );
}

export default Navbar;
