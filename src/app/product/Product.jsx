'use client'
import { useState } from 'react'
import Image from 'next/image'

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      title: "Remote Work Mentoring - Paket Fundamental",
      category: "mentoring",
      price: "Rp 200.000",
      description: "Program mentoring remote work untuk pemula",
      features: [
        "30-menit initial mentoring",
        "60-menit advance mentoring (2 sesi)",
        "Strategi + materi praktek remote work",
        "Tanpa konsultasi WA",
      ],
      image: "/mentoring-fundamental.jpg"
    },
    {
      id: 2,
      title: "Remote Work Mentoring - Paket Pro",
      category: "mentoring",
      price: "Rp 350.000",
      description: "Program mentoring remote work level menengah",
      features: [
        "30-menit initial mentoring",
        "90-menit advance mentoring (3 sesi)",
        "Strategi + materi praktek remote work",
        "Konsultasi via WA chat",
        "Akses Ruang Bertumbuh Aksa"
      ],
      image: "/mentoring-pro.jpg"
    },
    {
      id: 3,
      title: "Remote Work Mentoring - Paket Premium",
      category: "mentoring",
      price: "Rp 600.000",
      description: "Program mentoring remote work paling lengkap",
      features: [
        "30-menit initial mentoring",
        "150-menit advance mentoring (5 sesi)",
        "Strategi + materi praktek remote work",
        "Konsultasi via WA chat",
        "Akses Ruang Bertumbuh Aksa",
        "Internship + Surat Rekomendasi"
      ],
      image: "/mentoring-premium.jpg"
    },
    {
      id: 4,
      title: "Virtual Assistant Training",
      category: "virtual-assistant",
      price: "Coming Soon",
      description: "Program pelatihan menjadi Virtual Assistant profesional",
      features: [
        "Materi lengkap VA",
        "Praktek langsung",
        "Mentoring personal",
        "Sertifikat kelulusan"
      ],
      image: "/va-training.jpg"
    }
  ]

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'mentoring', name: 'Remote Work Mentoring' },
    { id: 'virtual-assistant', name: 'Virtual Assistant' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-blue-600">
          PRODUK AKSA ACADEMY
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Temukan berbagai produk pendukung pembelajaran Anda
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-600">{product.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-blue-600 font-bold text-xl mb-4">{product.price}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Beli Sekarang
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

export default Product 