import React from 'react'
import { Link } from 'react-router-dom'

function Layout({ children }) {
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
            <Link to="/" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              About Me
            </Link>
            <Link to="/ifs" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              IFS
            </Link>
            <Link to="/se" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              SE
            </Link>
            <Link to="/approach" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              My Approach (IFS + SE)
            </Link>
            <Link to="/services" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Contact Me
            </Link>
            <Link to="/pricing" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Pricing
            </Link>
            <Link to="/referrals" className="text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              Referrals
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

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

export default Layout
