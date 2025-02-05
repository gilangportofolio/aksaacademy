'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Partnership = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  const partners = [
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
      image: '/images/partnership/logo-4.png',
      name: 'Gilang Portofolio'
    },
    {
      image: '/images/partnership/logo-5.png',
      name: 'Gilang Portofolio'
    }
  ]

  // Duplikasi array untuk efek infinite scroll yang mulus
  const duplicatedPartners = [...partners, ...partners, ...partners]

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
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
            <div className={`flex gap-8 md:gap-16 ${isMobile ? 'animate-infinite-scroll' : 'animate-infinite-scroll-desktop'}`}>
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
    </section>
  )
}

export default Partnership 