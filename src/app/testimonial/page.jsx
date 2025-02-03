'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export default function TestimonialPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  
  const testimonials = [
    {
      id: 1,
      name: "James Pattinson",
      role: "Digital Marketer",
      image: "/images/testimonials/person1.jpg",
      rating: 4,
      text: "Ut lectus leo pretium eu facilisis amet nisi at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."
    },
    {
      id: 2,
      name: "Greg Stuart",
      role: "Content Creator",
      image: "/images/testimonials/person2.jpg",
      rating: 5,
      text: "Vestibulum, cum nam non amet consectetur morbi aliquam condimentum urget. Ultrices integer nunc neque accumsan laureet. Viverra nibh ultrices."
    },
    {
      id: 3,
      name: "Trevor Mitchell",
      role: "Entrepreneur",
      image: "/images/testimonials/person3.jpg",
      rating: 3,
      text: "Ut lectus leo pretium eu facilisis amet nisi at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Virtual Assistant",
      image: "/images/testimonials/person4.jpg",
      rating: 5,
      text: "Program VA di Aksa Academy sangat terstruktur. Saya belajar banyak skill baru yang langsung bisa saya aplikasikan."
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "Remote Worker",
      image: "/images/testimonials/person5.jpg",
      rating: 5,
      text: "Mentor-mentor di Aksa Academy sangat supportive. Mereka tidak hanya mengajarkan skill teknis tapi juga mindset yang diperlukan."
    }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          INI KATA MEREKA
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Apa yang dikatakan alumni kami tentang Aksa Academy
        </p>
        
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Testimonial Slider */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full md:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="relative w-16 h-16 mr-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover rounded-full"
                            priority={index === currentIndex}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-gray-700 text-sm flex-grow">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-blue-600 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
