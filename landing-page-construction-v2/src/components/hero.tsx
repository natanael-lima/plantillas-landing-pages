import {Button} from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { MessageCircle, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image con difuminado laterales */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://previews.123rf.com/images/mikkiorso/mikkiorso2505/mikkiorso250513260/246009534-architectural-blueprints-of-a-house-under-construction-with-workers-and-materials-in-daylight.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-neutral-900/100  to-transparent" />
          <div className="absolute inset-y-0 right-0 w-[60%] bg-gradient-to-l from-neutral-900/100 to-transparent" />
        </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side - Company Info */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance">
            Constructora
            <span className="block text-amber-500">OG</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl text-pretty">
            Construyendo tus sueños con precisión y calidad. Más de 20 años de experiencia en construcción residencial y
            comercial.
          </p>
        </div>

        {/* Right Side - Contact Card */}
        <div className="flex-shrink-0 ">
          <Card className="bg-white/5 backdrop-blur-md border border-white/30 p-6 w-80 rounded-2xl shadow-lg">
            <div className="space-y-4 text-white">
              <h3 className="text-xl font-semibold text-card-foreground">¿Listo para construir?</h3>
              <p className="text-sm text-muted-foreground">
                Obtén una cotización gratuita para tu proyecto de construcción
              </p>
              <div className="space-y-3">
                <Button className="w-full" size="lg">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar Ahora
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">Respuesta en menos de 24 horas</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
