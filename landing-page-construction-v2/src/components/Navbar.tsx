
"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return ( 
    <header className="absolute inset-x-0 top-0 z-20 max-w-6xl mx-auto justify-center items-center md:bg-transparent">
      {/* Contenedor principal */}
      <div
        className={`flex items-center justify-between px-6 py-4 transition-colors duration-300
          ${open ? "bg-white shadow-xl" : "bg-transparent"} md:bg-transparent`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-amber-200 md:text-white">Logo</div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a>
          <a href="#tech" className="hover:text-amber-400 transition-colors">Tech</a>
          <button className="ml-6 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
            Contacto
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {open ? <X className="text-black" size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white text-gray-800 w-full absolute top-full left-0 shadow-lg transition-all">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <a href="#home" className="hover:text-amber-500 transition-colors">Home</a>
            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-amber-500 transition-colors">Portfolio</a>
            <a href="#tech" className="hover:text-amber-500 transition-colors">Tech</a>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
