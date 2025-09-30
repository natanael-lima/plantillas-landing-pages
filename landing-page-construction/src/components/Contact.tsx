import { Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'

export default function Contact() {
  return (
    <section className="py-20 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950/80 mb-6">Contacto</h2>
            <p className="text-xl text-slate-900/60">¿Listo para comenzar tu proyecto? Contáctanos hoy</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Subscription Box */}
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-600 mb-4">Recibe nuestro correo</h3>
              <p className="text-slate-400 mb-6">
                Mantente al día con nuestros proyectos más recientes y consejos de construcción.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 bg-slate-200 text-slate-500 placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl transition-colors">
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
                      <Phone className="text-cyan-500" size={24} />
                      <div>
                        <p className="text-white font-semibold">Teléfono</p>
                        <p className="text-slate-300">+52 555 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="text-cyan-500" size={24} />
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-slate-300">info@constructoraosvaldo.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-cyan-500" size={24} />
                      <div>
                        <p className="text-white font-semibold">Ubicación</p>
                        <p className="text-slate-300">Av. Construcción 123, Jujuy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
