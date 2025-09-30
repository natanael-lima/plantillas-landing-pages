import React from 'react'
import { services } from '../lib/data'
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
    const [openService, setOpenService] = useState<number | null>(null);
  return (
    <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950/80 mb-6">Nuestros Servicios</h2>
            <p className="text-xl text-slate-900/60 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales de construcción adaptadas a tus necesidades
            </p>
          </div>

        <div className="relative z-10 mx-auto px-2 flex flex-col lg:flex-row items-end">
            {/* Columna izquierda (60%) */}
            <div className="w-full mb-8 lg:mb-10 lg:pr-18">
                <div className="space-y-4">
                    {services.map((service, index) => (
                    <div key={index} className="bg-slate-200/80 backdrop-blur-sm rounded-xl overflow-hidden">
                        <button
                        onClick={() => setOpenService(openService === index ? null : index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-400/20 transition-all duration-300"
                        >
                        <span className="text-xl font-semibold text-slate-500">{service.title}</span>
                        {openService === index ? 
                            <ChevronUp className="text-slate-500" size={24} /> : 
                            <ChevronDown className="text-slate-500" size={24} />
                        }
                        </button>
                        {openService === index && (
                        <div className="px-6 pb-6 pt-2">
                            <p className="text-slate-400 leading-relaxed">{service.description}</p>
                        </div>
                        )}
                    </div>
                    ))}
                </div>
            </div>
          
          </div>
        </div>
      </section>
  )
}
