import { setRequestLocale } from 'next-intl/server'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Quote from '@/components/Quote'
import GithubActivity from '@/components/GithubActivity'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home({ params }: { params: { locale: string } }) {
  // Opt into static rendering for this locale.
  setRequestLocale(params.locale)

  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <Quote />
      <GithubActivity />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
