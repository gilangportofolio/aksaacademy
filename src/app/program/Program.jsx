'use client'
import { useState } from 'react'
import Image from 'next/image'

const Program = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const programs = [
    {
      id: 1,
      title: "Digital Marketing",
      category: "marketing",
      price: "Rp 2.500.000",
      duration: "3 bulan",
      features: [
        "Stay ahead with DevicU's",
        "Hands-on projects to master digital marketing tools",
        "Run real SME ad campaigns with actual budgets",
        "Virtual Internship with real cases from partners"
      ],
      image: "https://www.w3schools.com/w3images/team1.jpg"
    },
    {
      id: 2,
      title: "Content Creator",
      category: "content",
      price: "Rp 2.000.000",
      duration: "2 bulan",
      features: [
        "Master content creation",
        "Learn video editing & graphic design",
        "Build personal branding",
        "Create viral social media content"
      ],
      image: "https://www.w3schools.com/w3images/team2.jpg"
    },
    {
      id: 3,
      title: "Virtual Assistant",
      category: "va",
      price: "Rp 1.800.000",
      duration: "2 bulan",
      features: [
        "Learn VA fundamentals",
        "Master productivity tools",
        "Project management skills",
        "Client communication training"
      ],
      image: "https://www.w3schools.com/w3images/team3.jpg"
    }
  ]

  const categories = [
    { id: 'all', name: 'Semua Program' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'content', name: 'Content Creator' },
    { id: 'va', name: 'Virtual Assistant' }
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
            <div key={program.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-blue-600 font-bold mb-4">{program.price}</p>
                <p className="text-gray-600 mb-4">Durasi: {program.duration}</p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Daftar Sekarang
                  </button>
                  <button className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                    Free Mini Course
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