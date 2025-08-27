import { Send } from 'lucide-react'
import React from 'react'

export default function Hero() {
  return (
      <section className="relative min-h-screen flex items-end pb-16 md:pb-24 lg:pb-32">
        {/* Fondo con overlay */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage: 'url(https://images.adsttc.com/media/images/552f/c665/e58e/cead/0b00/0008/large_jpg/IMG_5345.jpg?1429194309)'
            }}
        >
            <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 flex flex-col lg:flex-row items-end">
        {/* Columna izquierda (60%) */}
        <div className="w-full lg:w-[90%] mb-8 lg:mb-2 lg:pr-18">
          <div className="text-white">
            <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold mb-4">
              <span className="block text-cyan-500 mt-2 text-4xl  lg:text-8xl">CONSTRUCTURA OSVGUT</span>
              Construimos Futuros con Excelencia
              
            </h1>
            <p className="text-md md:text-xl text-slate-200 max-w-2xl leading-relaxed mb-8">
              Creamos espacios que inspiran y perduran, combinando innovación, calidad y compromiso en cada proyecto. Su visión, nuestra expertise, resultados excepcionales.
            </p>
            
            {/* Badges de servicios */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">Jujuy</span>
              <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">Construcción</span>
              <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">Pintura</span>
              <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">Estructuras</span>
              <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">Diseño</span>
              <span className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">Remodelación</span>
            </div>
          </div>
        </div>
        
        {/* Columna derecha (40%) - CTA Card */}
        <div className="w-full lg:w-[40%]">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 lg:p-8 shadow-xl">
            <h3 className="text-slate-800 font-bold text-xl mb-2">¿Listo para construir?</h3>
            <p className="text-slate-600 mb-6">
              Cotización gratuita en 24 horas. Planes de financiamiento disponibles.
            </p>
            <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
              <Send size={18} />
              <span>Solicitar Cotización</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
