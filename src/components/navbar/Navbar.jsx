
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center py-4">
            <div className="flex-shrink-0">
                <img src="https://via.placeholder.com/100x50" alt="Logo" className="h-10" />
            </div>

            <div className="flex-1">
                <ul className="flex justify-center space-x-6">
                    <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
                    <li><a href="#" className="hover:text-gray-400">Servicios</a></li>
                    <li><a href="#" className="hover:text-gray-400">Nosotros</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
                </ul>
            </div>

            <div>
                <a href="tel:+1234567890" className="hover:text-gray-400">📞 +12 345 678 90</a>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
