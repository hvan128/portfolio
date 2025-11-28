import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Quote from '@/components/Quote'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <TechStack />
      <Quote />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
