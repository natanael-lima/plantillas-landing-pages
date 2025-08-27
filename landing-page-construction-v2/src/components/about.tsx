import { Card } from "@/components/ui/Card"
import { Award, Users, Clock, Shield } from "lucide-react"

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Acerca de Nosotros</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Con más de dos décadas de experiencia, somos líderes en construcción de calidad en la región
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Two Cards */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-card-foreground mb-4">Excelencia Reconocida</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Hemos sido galardonados con múltiples premios por la calidad de nuestros proyectos y nuestro
                    compromiso con la innovación en la construcción. Nuestro equipo de profesionales altamente
                    capacitados garantiza que cada proyecto supere las expectativas de nuestros clientes.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-sm text-muted-foreground">Proyectos</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">20+</div>
                      <div className="text-sm text-muted-foreground">Años</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-card-foreground mb-4">Equipo Profesional</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">
                    Contamos con un equipo multidisciplinario de arquitectos, ingenieros, maestros de obra y
                    especialistas en diferentes áreas de la construcción. Cada miembro aporta su experiencia para
                    garantizar resultados excepcionales en cada proyecto que emprendemos.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Large Image */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden h-full">
              <div className="relative h-full min-h-[500px]">
                <img
                  src="/construction-team-working-on-modern-building-site-.png"
                  alt="Equipo de Constructora Osvaldo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground font-medium">Entrega puntual garantizada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground font-medium">
                        Garantía extendida en todos los trabajos
                      </span>
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
