'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      id: 1,
      name: "James Pattinson",
      role: "Digital Marketer",
      image: "https://www.w3schools.com/w3images/avatar2.png",
      rating: 4,
      text: "Ut lectus leo pretium eu facilisis amet nisi at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."
    },
    {
      id: 2,
      name: "Greg Stuart",
      role: "Content Creator",
      image: "https://www.w3schools.com/w3images/avatar6.png",
      rating: 5,
      text: "Vestibulum, cum nam non amet consectetur morbi aliquam condimentum urget. Ultrices integer nunc neque accumsan laureet."
    },
    {
      id: 3,
      name: "Trevor Mitchell",
      role: "Entrepreneur",
      image: "https://www.w3schools.com/w3images/avatar5.png",
      rating: 3,
      text: "Ut lectus leo pretium eu facilisis amet nisi at nec. Scelerisque risus tortor donec ipsum consequat semper."
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      image: "https://www.w3schools.com/w3images/avatar4.png",
      rating: 5,
      text: "Magna enim consectetur ullamcorper sit amet magna. Vestibulum quis nulla facilisis, finibus tellus at, varius est."
    },
    {
      id: 5,
      name: "Michael Chang",
      role: "Web Developer",
      image: "https://www.w3schools.com/w3images/avatar3.png",
      rating: 4,
      text: "Proin tempor lorem ut neque tempus, ut tempor nisi faucibus. Cras maximus ligula at tellus gravida auctor."
    },
    {
      id: 6,
      name: "Emily Parker",
      role: "Product Manager",
      image: "https://www.w3schools.com/w3images/avatar1.png",
      rating: 5,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= testimonials.length - 2 ? 0 : prev + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 3 : prev - 1
    )
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          INI KATA MEREKA
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Apa yang dikatakan alumni kami tentang Aksa Academy
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <button 
              onClick={handlePrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-xl p-8 shadow-lg"
                  >
                    <div className="flex items-center mb-6">
                      <div className="relative w-20 h-20 mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover rounded-full"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
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

                    <p className="text-gray-700 text-lg leading-relaxed">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handleNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-all"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(testimonials.length - 2)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index 
                    ? 'w-8 h-2 bg-blue-600' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial