"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, MapPin, Mail, Send, Eye, ArrowRight } from 'lucide-react';
import { services, projects } from '../lib/data'

export default function Home() {
  const [openService, setOpenService] = useState<number | null>(null);


  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg)'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              CONSTRUCTORA
              <span className="block text-6xl md:text-8xl text-blue-400">OSVALDO</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Transformamos sueños en realidad con más de 15 años de experiencia en construcción de alta calidad
            </p>
          </div>

          {/* CTA Card */}
          <div className="fixed bottom-8 right-8 md:absolute md:bottom-12 md:right-12">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl max-w-sm">
              <h3 className="text-slate-800 font-bold text-lg mb-2">¿Listo para construir?</h3>
              <p className="text-slate-600 text-sm mb-4">
                Cotización gratuita en 24 horas. Planes de financiamiento disponibles.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <Send size={18} />
                <span>Solicitar Cotización</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Servicios</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales de construcción adaptadas a tus necesidades
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-700/50 backdrop-blur-sm rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenService(openService === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-600/50 transition-all duration-300"
                >
                  <span className="text-xl font-semibold text-white">{service.title}</span>
                  {openService === index ? 
                    <ChevronUp className="text-blue-400" size={24} /> : 
                    <ChevronDown className="text-slate-400" size={24} />
                  }
                </button>
                {openService === index && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-slate-300 leading-relaxed">{service.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work/Projects Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestros Proyectos</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Cada proyecto refleja nuestro compromiso con la excelencia y la innovación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all duration-300"></div>
                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
                    <Eye size={20} className="text-slate-800" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    <span>Ver proyecto</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre Nosotros</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
            {/* Left Column - Two stacked items */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6 h-[280px]">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">15 Años de Experiencia</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Desde 2009, Constructora Osvaldo ha sido líder en el sector de la construcción, 
                    entregando proyectos de alta calidad que superan las expectativas de nuestros clientes. 
                    Nuestro equipo de profesionales altamente capacitados garantiza excelencia en cada detalle.
                  </p>
                </div>
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">15+</span>
                </div>
              </div>

              <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6 h-[280px]">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">200+</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Proyectos Completados</h3>
                  <p className="text-slate-300 leading-relaxed">
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
                  <h4 className="font-bold text-slate-800 mb-1">Ing. Osvaldo Ramírez</h4>
                  <p className="text-slate-600 text-sm">Director General y Fundador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contacto</h2>
            <p className="text-xl text-slate-300">¿Listo para comenzar tu proyecto? Contáctanos hoy</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Subscription Box */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Recibe nuestro boletín</h3>
              <p className="text-slate-300 mb-6">
                Mantente al día con nuestros proyectos más recientes y consejos de construcción.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 bg-slate-700 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </div>

            {/* Contact Info with Background Image */}
            <div className="relative rounded-2xl overflow-hidden h-80">
              <img
                src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg"
                alt="Oficina Constructora Osvaldo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full max-w-sm mx-4">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-blue-400" size={24} />
                      <div>
                        <p className="text-white font-semibold">Teléfono</p>
                        <p className="text-slate-300">+52 555 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="text-blue-400" size={24} />
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-slate-300">info@constructoraosvaldo.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-blue-400" size={24} />
                      <div>
                        <p className="text-white font-semibold">Ubicación</p>
                        <p className="text-slate-300">Av. Construcción 123, CDMX</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">CONSTRUCTORA OSVALDO</h3>
            <p className="text-slate-400 mb-6">Construyendo el futuro, un proyecto a la vez</p>
            <div className="border-t border-slate-800 pt-6">
              <p className="text-slate-500 text-sm">
                © 2024 Constructora Osvaldo. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}