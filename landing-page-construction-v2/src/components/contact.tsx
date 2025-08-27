import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contáctanos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas y ayudarte a hacerlas realidad
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side - Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              Suscríbete para recibir actualizaciones
            </h3>
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-card-foreground mb-2">
                    Nombre
                  </label>
                  <input id="firstName" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-card-foreground mb-2">
                    Apellido
                  </label>
                  <input id="lastName" placeholder="Tu apellido" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email
                </label>
                <input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                  Teléfono
                </label>
                <input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Mensaje
                </label>
                <textarea id="message" placeholder="Cuéntanos sobre tu proyecto..." rows={4} />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </Card>

          {/* Right Side - Contact Info with Image */}
          <div className="relative">
            <Card className="overflow-hidden h-full">
              <div className="relative h-full min-h-[600px]">
                <img
                  src="/modern-construction-office-building-with-glass-win.png"
                  alt="Oficinas Constructora Osvaldo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />

                {/* Contact Information Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center">
                  <div className="bg-card/90 backdrop-blur-md rounded-lg p-8 space-y-8">
                    <h3 className="text-2xl font-semibold text-card-foreground mb-6">Información de Contacto</h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-card-foreground">Teléfono</h4>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                          <p className="text-muted-foreground">+1 (555) 987-6543</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-card-foreground">Email</h4>
                          <p className="text-muted-foreground">info@constructoraosvaldo.com</p>
                          <p className="text-muted-foreground">proyectos@constructoraosvaldo.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-card-foreground">Ubicación</h4>
                          <p className="text-muted-foreground">
                            Av. Construcción 123
                            <br />
                            Ciudad, Estado 12345
                            <br />
                            País
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <p className="text-sm text-muted-foreground text-center">
                        Horario de atención: Lunes a Viernes 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
