import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { BehanceScraper } from '@/components/BehanceScraper'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Settings, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Index = () => {
  const [showScraper, setShowScraper] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Admin Panel Toggle */}
      <div className="fixed top-20 right-4 z-40">
        <Button
          onClick={() => setShowScraper(!showScraper)}
          size="sm"
          variant="outline"
          className="bg-card/80 backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary/10"
        >
          {showScraper ? <X className="h-4 w-4" /> : <Settings className="h-4 w-4" />}
          {showScraper ? 'Close' : 'Admin'}
        </Button>
      </div>

      {/* Behance Scraper Panel */}
      <AnimatePresence>
        {showScraper && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed top-0 right-0 w-full md:w-1/2 lg:w-1/3 h-full bg-background/95 backdrop-blur-lg border-l border-border z-30 overflow-y-auto"
          >
            <div className="p-6 pt-20">
              <BehanceScraper />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;