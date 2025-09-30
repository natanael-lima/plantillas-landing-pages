import React from 'react'

export default function About() {
  return (
    <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold  text-slate-950/80 mb-6">Sobre Nosotros</h2>
            <p className="text-xl text-slate-900/60 max-w-2xl mx-auto">
              Conoce un poco sobre nosotros con esta breve informacion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
            {/* Left Column - Two stacked items */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-200/70 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6 h-[45%]">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-500 mb-4">15 Años de Experiencia</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Desde 2009, Constructora Osvaldo ha sido líder en el sector de la construcción, 
                    entregando proyectos de alta calidad que superan las expectativas de nuestros clientes. 
                    Nuestro equipo de profesionales altamente capacitados garantiza excelencia en cada detalle.
                  </p>
                </div>
                <div className="w-12 h-12 md:w-24 md:h-24 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg md:text-2xl">15+</span>
                </div>
              </div>

              <div className="bg-slate-200/70 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6 h-[45%]">
                <div className="w-12 h-12 md:w-24 md:h-24 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg md:text-2xl">200+</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-500 mb-4">Proyectos Completados</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Más de 200 proyectos exitosos nos respaldan. Desde residencias familiares hasta 
                    complejos comerciales, cada construcción refleja nuestro compromiso con la calidad, 
                    puntualidad y satisfacción del cliente.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Large image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="Equipo Constructora Osvaldo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/30"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-4">
                  <h4 className="font-bold text-slate-800 mb-1">Osvaldo Gutierrez</h4>
                  <p className="text-slate-600 text-sm">Contratista General y Fundador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
