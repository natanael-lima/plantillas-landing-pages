import { Building2, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-sidebar-primary" />
              <span className="text-xl font-bold">Constructora Osvaldo</span>
            </div>
            <p className="text-sm text-sidebar-foreground/80 text-pretty">
              Construyendo el futuro con calidad, innovación y compromiso. Tu socio confiable en cada proyecto.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-sidebar-foreground/60 hover:text-sidebar-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-sidebar-foreground/60 hover:text-sidebar-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-sidebar-foreground/60 hover:text-sidebar-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-sidebar-foreground/60 hover:text-sidebar-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sidebar-foreground">Servicios</h3>
            <ul className="space-y-2 text-sm text-sidebar-foreground/80">
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Construcción Residencial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Construcción Comercial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Remodelaciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Mantenimiento
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sidebar-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-sidebar-foreground/80">
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Acerca de Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Nuestros Trabajos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sidebar-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sidebar-foreground">Contacto</h3>
            <ul className="space-y-2 text-sm text-sidebar-foreground/80">
              <li>+1 (555) 123-4567</li>
              <li>info@constructoraosvaldo.com</li>
              <li>
                Av. Construcción 123
                <br />
                Ciudad, Estado 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
          <p className="text-sm text-sidebar-foreground/60">
            © 2024 Constructora Osvaldo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
