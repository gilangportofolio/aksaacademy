'use client'
import Image from 'next/image'
import { partnerships } from '@/data/partnerships'

const PartnershipPage = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-indigo-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            FEATURED PARTNERS
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Kolaborasi strategis untuk inovasi dan pengembangan berkelanjutan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerships.featuredPartners.map((partner) => (
  <a
    key={partner.id}
    href={partner.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex items-center space-x-4 mb-6">
      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-blue-50 p-2">
        <Image
          src={partner.image}
          alt={partner.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
        {partner.name}
      </h3>
    </div>

    <p className="text-gray-600 text-sm mb-6 line-clamp-3">
      {partner.description}
    </p>

    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium rounded-full">
      {partner.tag}
    </span>
  </a>
))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnershipPage 