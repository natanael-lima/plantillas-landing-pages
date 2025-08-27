import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar/>
      <div className="mx-auto max-w-[80%] min-w-0">
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
