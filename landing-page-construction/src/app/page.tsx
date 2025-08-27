"use client";

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  


  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar/>
      <Hero/>
      <Services/>
      <Work/>
      <About/>
      <Contact/>
      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">CONSTRUCTORA OSGU</h3>
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