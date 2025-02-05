'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { partnerships } from '@/data/partnerships'

const Partnership = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  // Duplikasi array untuk efek infinite scroll yang mulus
  const duplicatedPartners = [...partnerships.sliderPartners, ...partnerships.sliderPartners, ...partnerships.sliderPartners]

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section 1: Animated Slider */}
        <div className="mb-32">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            TRUSTED PARTNERS
          </h2>
          <p className="text-gray-600 text-center mb-16">
            Berkolaborasi dengan berbagai institusi terkemuka
          </p>
          
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden">
              <div className={`flex gap-12 md:gap-20 ${isMobile ? 'animate-infinite-scroll' : 'animate-infinite-scroll-desktop'}`}>
                {duplicatedPartners.map((partner, index) => (
                  <div
                    key={`partner-${index}`}
                    className="flex-shrink-0 w-[180px] md:w-[220px]"
                  >
                    <div className="flex flex-col items-center">
                      <div className="relative w-[180px] h-[90px] md:w-[220px] md:h-[110px]">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-sm md:text-base font-medium text-center text-gray-600 mt-4">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Featured Partners with Description */}
        <div className="mb-32">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            FEATURED PARTNERS
          </h2>
          <p className="text-gray-600 text-center mb-16">
            Kolaborasi strategis untuk inovasi
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.featuredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative w-14 h-14">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{partner.name}</h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-6">
                  {partner.description}
                </p>
                
                <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {partner.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Grid Partners */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            ECOSYSTEM PARTNERS
          </h2>
          <p className="text-gray-600 text-center mb-16">
            Bagian dari ekosistem kami
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {partnerships.gridPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center h-32"
              >
                <div className="relative w-28 h-28">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership 