'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Partnership = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  const originalPartners = [
    {
      image: '/images/partnership/logo-1.png',
      name: 'Gilang Portofolio'
    },
    {
      image: '/images/partnership/logo-2.png',
      name: 'Gilang Portofolio'
    },
    {
      image: '/images/partnership/logo-3.png',
      name: 'Gilang Portofolio'
    },
    {
      image: '/images/partnership/logo-1.png',
      name: 'Gilang Portofolio'
    },
    {
      image: '/images/partnership/logo-5.png',
      name: 'Gilang Portofolio'
    },
    {
      image: '/images/logo.png',
      name: 'Gilang Portofolio'
    },
    // Duplikasi partner untuk efek infinite scroll
    {
      image: '/images/partnership/logo-3.png',
      name: 'Gilang Portofolio'
    },
    {
      image: '/images/partnership/logo-4.png',
      name: 'Gilang Portofolio'
    }
  ]

  // Tripple the partners for seamless infinite scroll
  const partners = [...originalPartners, ...originalPartners, ...originalPartners]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          PARTNERSHIP AND COLLABORATION
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Berkolaborasi dengan berbagai institusi terkemuka
        </p>
        
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Slider Container */}
            <div 
              className="flex gap-16 md:gap-24"
              style={{
                animation: 'scroll 40s linear infinite',
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[200px] md:w-[250px]"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-[200px] h-[100px] md:w-[250px] md:h-[125px]">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        priority={index < 4}
                      />
                    </div>
                    <h3 className="text-sm md:text-base font-medium text-center text-gray-600 mt-2">
                      {partner.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${originalPartners.length * (isMobile ? 216 : 274)}px);
          }
        }
      `}</style>
    </section>
  )
}

export default Partnership 