import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutMe from "@/components/about"
import Skills from "@/components/skills"
import ContactForm from "@/components/contact-form"
import ParticleBackground from "@/components/particle-background"
import CustomCursor from "@/components/custom-cursor"
import Portfolio from "@/components/portfolio"

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <CustomCursor />
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactForm />
      <footer className="py-12 bg-gray-900 text-center text-white">
        <div className="container mx-auto px-6 flex justify-center items-center">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Khen. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}