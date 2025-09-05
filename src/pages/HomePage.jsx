import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import heroBackground from '../assets/hero-background.jpg'

function HomePage() {
  return (
    <>
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
    </>
  )
}

export default HomePage
