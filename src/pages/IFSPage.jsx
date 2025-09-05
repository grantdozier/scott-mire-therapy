import React from 'react'
import ifsImage from '../img/internal-family-systems-ifs-therapy.jpg'

function IFSPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8 text-center">Internal Family Systems (IFS)</h2>
          
          <div className="prose prose-lg prose-invert mx-auto">
            <div className="mb-10 flex justify-center">
              <img 
                src={ifsImage} 
                alt="Internal Family Systems Therapy" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: '400px' }}
              />
            </div>
            
            <h3 className="text-2xl font-light text-white mb-6 text-center">What is IFS?</h3>
            
            <p className="text-gray-300 mb-6">
              IFS is the primary model I utilize to conceptualize the change process. IFS began as an experiential model of psychotherapy that incorporates all parts of your experience: thoughts, images, feelings, sensations, movements, impulses to move, imagination, and the unseen. Since IFS began, it has become a way of being and engaging with the world that can be useful wherever we find ourselves.
            </p>
            
            <p className="text-gray-300 mb-6">
              In the process of exploring together, I support you in slowing things down. Slowing down in the moment creates space for you to notice your experience as it is happening. Noticing in this way creates a chance for you to develop new relationships with what you notice, getting to know it from its perspective. This new way of relating allows you to calm the inner wars between the various parts of you with less effort and supports them transforming into helpful resources. It's like a fully interactive, supported mindfulness practice. Maybe this sounds a little out there, but the first time you experience this difference, it will make sense and the practicality will be tangible.
            </p>
            
            <p className="text-gray-300 mb-6">
              Our goal is to empower you to have more influence in your own life as it is and in creating more of what you wish for. Because we slow things down, we create a place with space to explore anything and everything. All parts of your life could benefit from a little more of you and little less effort and hard work. Your presence and a little bit of wonder is all that is required.
            </p>
            
            <p className="text-gray-300 mb-4">
              Internal Family Systems creates a path for supporting and transforming:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-300 mb-6">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>leadership</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>peak performance</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>vision</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>integrating cultural/ancestral life</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>processing psychedelic experiences</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>cyclical patterns</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>relationships of all kinds</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>transitions</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>stress</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>anxiety/discomfort</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>loss of your mojo</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>sexuality</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>gender</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>spiritual/religious life/development</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>stuckness</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>and the facts of life, love, and loss</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IFSPage
