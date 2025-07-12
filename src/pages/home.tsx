import React from 'react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Hero from '../components/sections/hero'
import Features from '../components/sections/features'
import HowItWorks from '../components/sections/how-it-works'
import Testimonials from '../components/sections/testimonials'
import CallToAction from '../components/sections/call-to-action'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage