import React from 'react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Hero from '../components/sections/hero'
import Services from '../components/sections/services'
import Contact from '../components/sections/contact'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage