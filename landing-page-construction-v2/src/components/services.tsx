"use client"

import { useState } from "react"
import { Card } from "@/components/ui/Card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { services } from "@/lib/data"

export function Services() {
  const [openService, setOpenService] = useState<number | null>(null)

  const toggleService = (id: number) => {
    setOpenService(openService === id ? null : id)
  }

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto ">
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto ">
            Ofrecemos una gama completa de servicios de construcción para satisfacer todas tus necesidades
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            const isOpen = openService === service.id

            return (
              <Card key={service.id} className="overflow-hidden  border-amber-200/25 bg-linear-to-bl from-amber-500/20 to-amber-500/5 border shadow-sm p-4">
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-amber-50" />
                      </div>
                      <h3 className="font-semibold text-amber-50">{service.title}</h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-50" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-50" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 space-y-4">
                    <p className="text-sm text-amber-50/50">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-amber-50/50 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
