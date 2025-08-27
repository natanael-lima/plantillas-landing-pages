
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { Services } from "@/components/Services"
import { Work } from "@/components/Work"



export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar/>
      <div className="mx-auto w-full md:max-w-[85%] min-w-0">
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
