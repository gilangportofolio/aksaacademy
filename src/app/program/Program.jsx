'use client'
import { useState } from 'react'
import Image from 'next/image'

const Program = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const programs = [
    {
      id: 1,
      title: "Remote Work Mentoring - Paket Fundamental",
      category: "mentoring",
      price: "Rp 200.000",
      duration: "60 menit",
      features: [
        { text: "30-menit initial mentoring", available: true },
        { text: "60-menit advance mentoring (2 sesi)", available: true },
        { text: "Strategi + materi praktek remote work", available: true },
        { text: "Konsultasi via WA chat", available: false },
        { text: "Akses Ruang Bertumbuh Aksa", available: false },
        { text: "Internship + Surat Rekomendasi", available: false }
      ],
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=640&h=360&fit=crop"
    },
    {
      id: 2,
      title: "Remote Work Mentoring - Paket Pro",
      category: "mentoring",
      price: "Rp 350.000",
      duration: "90 menit",
      features: [
        { text: "30-menit initial mentoring", available: true },
        { text: "90-menit advance mentoring (3 sesi)", available: true },
        { text: "Strategi + materi praktek remote work", available: true },
        { text: "Konsultasi via WA chat", available: true },
        { text: "Akses Ruang Bertumbuh Aksa", available: true },
        { text: "Internship + Surat Rekomendasi", available: false }
      ],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=640&h=360&fit=crop"
    },
    {
      id: 3,
      title: "Remote Work Mentoring - Paket Premium",
      category: "mentoring",
      price: "Rp 600.000",
      duration: "150 menit",
      features: [
        { text: "30-menit initial mentoring", available: true },
        { text: "150-menit advance mentoring (5 sesi)", available: true },
        { text: "Strategi + materi praktek remote work", available: true },
        { text: "Konsultasi via WA chat", available: true },
        { text: "Akses Ruang Bertumbuh Aksa", available: true },
        { text: "Internship + Surat Rekomendasi", available: true }
      ],
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=640&h=360&fit=crop"
    }
  ]

  const categories = [
    { id: 'all', name: 'Semua Program' },
    { id: 'mentoring', name: 'Remote Work Mentoring' },
  ]

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">
          PROGRAM KURSUS
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Pilih program kursus untuk meningkatkan skill digital Anda
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all text-lg font-semibold ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow flex flex-col">
              <div className="relative h-56">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={program.id <= 3}
                />
              </div>
              
              <div className="p-6 flex flex-col h-full">
                {/* Title Section - 2 lines */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-center">
                    <span className="block">Remote Work Mentoring</span>
                    <span className="block text-blue-600">{program.title.split('- ')[1]}</span>
                  </h3>
                </div>

                {/* Price Section */}
                <div className="mb-2 text-center">
                  <p className="text-blue-600 font-bold text-2xl">{program.price}</p>
                </div>

                {/* Duration Section */}
                <div className="mb-4 text-center">
                  <p className="text-gray-600">Durasi: {program.duration}</p>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-3">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700 text-base">
                        {feature.available ? (
                          <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className="leading-relaxed">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Section */}
                <div className="mt-auto">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program 