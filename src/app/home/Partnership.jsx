'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { partnerships } from '@/data/partnerships'

const Partnership = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  const duplicatedPartners = [...partnerships.sliderPartners, ...partnerships.sliderPartners, ...partnerships.sliderPartners]

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
   // Di Partnership
<section className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-indigo-50 to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section 1: Animated Slider with Modern Touch */}
        <div className="mb-32 relative">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              TRUSTED PARTNERS
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Berkolaborasi dengan berbagai institusi terkemuka untuk memberikan pengalaman pembelajaran terbaik
            </p>
            
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent z-10"></div>
              
              <div className="flex whitespace-nowrap">
                <div 
                  className={`flex gap-8 md:gap-12 ${
                    isMobile ? 'animate-infinite-scroll' : 'animate-infinite-scroll-desktop'
                  }`}
                  style={{
                    minWidth: "fit-content",
                    willChange: "transform"
                  }}
                >
                  {duplicatedPartners.map((partner, index) => (
                    <div
                      key={`partner-${index}`}
                      className="inline-flex flex-shrink-0 w-[120px] md:w-[150px] group"
                    >
                      <div className="flex flex-col items-center p-3 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:scale-105">
                        <div className="relative w-[120px] h-[60px] md:w-[150px] md:h-[75px]">
                          <Image
                            src={partner.image}
                            alt={partner.name}
                            fill
                            sizes="(max-width: 768px) 33vw, 20vw"
                            className="object-contain filter group-hover:brightness-110 transition-all"
                            priority={index < 5}
                            onError={(e) => {
                              console.error(`Error loading image for ${partner.name}:`, e);
                            }}
                          />
                        </div>
                        <h3 className="text-xs md:text-sm font-medium text-center text-gray-600 mt-3 group-hover:text-blue-600">
                          {partner.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership