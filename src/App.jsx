import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'
import heroBackground from './assets/hero-background.jpg'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-center py-4">
              <h1 className="text-2xl font-bold text-white px-4 py-2">
                Scott Mire, LPC
              </h1>
              <p className="text-gray-300 text-sm mt-1">
                Licensed Professional Counselor & Therapist
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-gray-700">
          <nav className="flex justify-center">
            <a href="#home" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Home
            </a>
            <a href="#about" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              About Me
            </a>
            <a href="#therapy" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Therapy
            </a>
            <a href="#services" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Contact
            </a>
            <a href="#pricing" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Pricing
            </a>
            <a href="#referrals" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Referrals
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
            What if you could experience...
          </h2>
          <h3 className="text-2xl md:text-4xl font-light text-white">
            more <span className="font-normal">perspective, playfulness & presence</span>?
          </h3>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Professional photo placeholder */}
            <div className="text-center">
              <div className="w-80 h-80 mx-auto bg-gray-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-gray-400 text-lg">Professional Photo</span>
              </div>
              <p className="text-xl text-gray-300">
                You don't have to do this alone.
              </p>
            </div>

            {/* Right side - Main message */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-light text-white mb-6">
                Together,
              </h3>
              <p className="text-xl text-gray-300 mb-4">
                we can guide you into fresh relationship with
              </p>
              <p className="text-xl text-gray-300 mb-4">
                what you're experiencing,
              </p>
              <p className="text-xl text-gray-300 mb-8">
                so you can have more choice
              </p>
              <p className="text-xl text-gray-300 mb-12">
                to move toward what you want.
              </p>
              
              <div className="text-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  Contact Scott
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-light text-white mb-2 border-b border-gray-600 pb-2 inline-block">
              Professional Counseling Services:
            </h4>
            <h5 className="text-xl text-white">
              Supporting You in Your Journey
            </h5>
            <p className="text-green-400 mt-4">
              scott@scottmirelpc.com
            </p>
            <p className="text-gray-400 mt-2">
              Licensed Professional Counselor
            </p>
          </div>

          {/* Certification badges */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-32 h-32 bg-red-800 rounded-full flex items-center justify-center border-4 border-red-600">
              <div className="text-center text-white">
                <div className="text-xs font-bold">LPC</div>
                <div className="text-xs">LICENSED</div>
                <div className="text-xs">PROFESSIONAL</div>
                <div className="text-xs">COUNSELOR</div>
              </div>
            </div>
            <div className="w-32 h-32 bg-orange-800 rounded-full flex items-center justify-center border-4 border-orange-600">
              <div className="text-center text-white">
                <div className="text-xs font-bold">THERAPY</div>
                <div className="text-xs">CERTIFIED</div>
                <div className="text-xs">CLINICAL</div>
                <div className="text-xs">CONSULTANT</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              2025 Scott Mire, LPC
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
