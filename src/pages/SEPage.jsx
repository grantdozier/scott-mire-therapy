import React from 'react'
import seImage from '../img/somatic-experiencing-therapy.jpg'

function SEPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8 text-center">Somatic Experiencing (SE)</h2>
          
          <div className="prose prose-lg prose-invert mx-auto">
            <div className="mb-10 flex justify-center">
              <img 
                src={seImage} 
                alt="Somatic Experiencing Therapy" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: '400px' }}
              />
            </div>
            
            <h3 className="text-2xl font-light text-white mb-6 text-center">What is SE?</h3>
            
            <p className="text-gray-300 mb-6">
              Somatic Experiencing (SE™) is a powerful approach to healing trauma and stress disorders by focusing on the body's natural ability to regulate and restore itself. Developed by Dr. Peter A. Levine over more than four decades, SE aims to resolve symptoms of stress, shock, and trauma that accumulate in our bodies and nervous systems.
            </p>
            
            <p className="text-gray-300 mb-6">
              From an SE perspective, trauma is viewed through how it manifests in the nervous system and how that dysregulation impacts our lives. When we become stuck in patterns of fight, flight, or freeze, SE helps us release these trapped energies, recover our natural resilience, and return to a state of balance and well-being.
            </p>
            
            <h3 className="text-2xl font-light text-white mb-6 text-center">How SE Works</h3>
            
            <p className="text-gray-300 mb-6">
              The Somatic Experiencing approach facilitates the completion of self-protective motor responses and the release of survival energy bound in the body, addressing the root cause of trauma symptoms. This is approached by gently guiding clients to develop increasing tolerance for difficult bodily sensations and suppressed emotions, working to complete defensive responses that were previously thwarted.
            </p>
            
            <p className="text-gray-300 mb-6">
              Dr. Levine was inspired to develop SE when he observed that animals in the wild, despite being constantly under threat, rarely show symptoms of trauma. He discovered that trauma is related to the freeze response—the third survival response when fight and flight are not options. This immobilization response is designed to be temporary, allowing the massive energy prepared for fight or flight to discharge through shaking and trembling once the threat has passed.
            </p>
            
            <p className="text-gray-300 mb-6">
              However, if this immobilization phase isn't completed, the energy remains trapped in the body, which continues to perceive itself as under threat. SE works to release this stored energy and turn off the internal alarm that causes dysregulation and dissociation, helping people understand their body's response to trauma and heal through a "body-first" approach.
            </p>
            
            <h3 className="text-2xl font-light text-white mb-6 text-center">Benefits of Somatic Experiencing</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 mb-6">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>Resolution of trauma symptoms</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>Reduced anxiety and stress</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>Greater emotional resilience</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>Improved body awareness</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>Enhanced capacity for presence</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>Better regulation of the nervous system</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>Deeper connection to self and others</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">•</span>
                <span>Release of physical tension patterns</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              In our work together, I apply Somatic Experiencing principles to help you gently navigate and resolve the impacts of trauma and stress, supporting your body's innate wisdom to heal and restore balance to your nervous system.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SEPage
