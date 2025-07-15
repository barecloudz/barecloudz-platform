import React from 'react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Hero from '../components/sections/hero'
import Services from '../components/sections/services'
import HowItWorks from '../components/sections/how-it-works'
import Benefits from '../components/sections/benefits'
import Testimonials from '../components/sections/testimonials'
import CallToAction from '../components/sections/call-to-action'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage