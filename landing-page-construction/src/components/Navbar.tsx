import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar scroll y cambiar estilo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full justify-between items-center z-50 transition-all duration-300 ${isScrolled ? 'bg-white/85 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <span className={`text-xl font-bold ${isScrolled ? 'text-blue-800' : 'text-white'}`}>LOGO</span>
        </div>

        {/* Opciones en el centro (desktop) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-8">
            {['Inicio', 'Servicios', 'Proyectos', 'Nosotros'].map((item) => (
              <a
                key={item}
                href="#"
                className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Botón de contacto a la derecha (desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            <MessageCircle size={18} className="mr-2" />
            WhatsApp
          </a>
        </div>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-blue-800">LOGO</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-500"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center space-y-8">
            {['Inicio', 'Servicios', 'Proyectos', 'Nosotros'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
                onClick={handleLinkClick}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="p-6 border-t">
            <a
              href="#"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full"
              onClick={handleLinkClick}
            >
              <MessageCircle size={20} className="mr-2" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar el menú */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;