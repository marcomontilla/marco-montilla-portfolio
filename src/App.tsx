import { useTheme } from '@/hooks/useTheme'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

export default function App() {
  // Initialize theme on mount (applies class to <html>)
  useTheme()

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-dark-base transition-colors duration-300">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}
