import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import IFSPage from './pages/IFSPage'
import SEPage from './pages/SEPage'
import ApproachPage from './pages/ApproachPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/ifs" element={
          <Layout>
            <IFSPage />
          </Layout>
        } />
        <Route path="/se" element={
          <Layout>
            <SEPage />
          </Layout>
        } />
        <Route path="/approach" element={
          <Layout>
            <ApproachPage />
          </Layout>
        } />
        {/* Add placeholder routes for other pages */}
        <Route path="/about" element={
          <Layout>
            <div className="py-16 bg-gray-900">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-light text-white mb-8 text-center">About Me</h2>
                <p className="text-gray-300 text-center">Content coming soon...</p>
              </div>
            </div>
          </Layout>
        } />
        <Route path="/services" element={
          <Layout>
            <div className="py-16 bg-gray-900">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-light text-white mb-8 text-center">Services</h2>
                <p className="text-gray-300 text-center">Content coming soon...</p>
              </div>
            </div>
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <div className="py-16 bg-gray-900">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-light text-white mb-8 text-center">Contact Me</h2>
                <p className="text-gray-300 text-center">Content coming soon...</p>
              </div>
            </div>
          </Layout>
        } />
        <Route path="/pricing" element={
          <Layout>
            <div className="py-16 bg-gray-900">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-light text-white mb-8 text-center">Pricing</h2>
                <p className="text-gray-300 text-center">Content coming soon...</p>
              </div>
            </div>
          </Layout>
        } />
        <Route path="/referrals" element={
          <Layout>
            <div className="py-16 bg-gray-900">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-light text-white mb-8 text-center">Referrals</h2>
                <p className="text-gray-300 text-center">Content coming soon...</p>
              </div>
            </div>
          </Layout>
        } />
        {/* Redirect any other routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
