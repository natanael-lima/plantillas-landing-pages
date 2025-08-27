import { projects } from '@/lib/data'
import { ArrowRight, Eye } from 'lucide-react'
import React from 'react'

export default function Work() {
  return (
    <section className="py-20 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Nuestros Proyectos</h2>
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
  )
}
