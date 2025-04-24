'use client'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white via-indigo-50/30 to-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-16 py-2">
            Aksa Academy Indonesia
          </h1>
          
          {/* Visi & Misi Container */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex-shrink-0">
                  <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-800">Visi Kami</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Menjadi platform edukasi yang menyenangkan dan ramah untuk insan pembelajar yang ingin melakukan pengembangan diri dan menjalani karir terbaik sesuai passion dan potensinya.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex-shrink-0">
                  <svg className="w-full h-full text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
                    <path d="M12 8l-4 4h8z"/>
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-800">Misi Kami</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Mendukung insan pembelajar dengan aktivitas mentoring privat, mentoring grup, webinar, sesi sharing, materi pengembangan diri, konseling, dan pelatihan yang dibutuhkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-10 px-4 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-6">
              Kesempatan Lebih Besar untuk Bekerja/Berkarya secara Remote
            </h2>
            
            <div className="space-y-6">
              {/* Highlight Box 1 */}
              <div className="bg-blue-50/50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-blue-800">Sejak 2020</span>, model kerja remote semakin berkembang pesat dan diperkirakan akan diadopsi hingga 
                  <span className="bg-blue-100 px-2 py-0.5 rounded mx-1 font-semibold text-blue-800">
                    81%
                  </span> 
                  pada 2024 (AT&T).
                </p>
              </div>

              {/* Highlight Box 2 */}
              <div className="bg-blue-50/50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  Saat ini, ada sekitar 
                  <span className="bg-blue-100 px-2 py-0.5 rounded mx-1 font-semibold text-blue-800">
                    25.000
                  </span> 
                  virtual assistant/remote workers yang bekerja secara remote di seluruh dunia, ditambah hampir 
                  <span className="bg-blue-100 px-2 py-0.5 rounded mx-1 font-semibold text-blue-800">
                    30 juta
                  </span> 
                  freelancer di platform seperti Upwork, Fiverr, dan Freelancer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold text-center text-blue-800 mb-6">
              Masalah yang Sering Dihadapi saat Pencarian Pekerjaan atau Switch Career
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              Siapapun yang sedang dalam proses pengembangan diri dan karir akan merasakan kebingungan, burnout, kurang percaya diri, hingga mental block. Bahkan tak jarang jadi memengaruhi kesehatan mental hingga timbul depresi.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Confusion',
                  icon: (
                    <svg className="w-16 h-16 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"/>
                      <path d="M12 8V12" strokeLinecap="round"/>
                      <path d="M12 16H12.01" strokeLinecap="round"/>
                    </svg>
                  ),
                  description: 'Kesulitan menentukan arah karir dan mengambil keputusan yang tepat'
                },
                {
                  title: 'Lack of Confidence',
                  icon: (
                    <svg className="w-16 h-16 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"/>
                      <path d="M12 16C7.58172 16 4 19.134 4 23H20C20 19.134 16.4183 16 12 16Z"/>
                      <path d="M9 9H15" strokeLinecap="round"/>
                    </svg>
                  ),
                  description: 'Keraguan akan kemampuan diri dan takut menghadapi tantangan baru'
                },
                {
                  title: 'Mental Block',
                  icon: (
                    <svg className="w-16 h-16 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"/>
                      <path d="M9 9L15 15" strokeLinecap="round"/>
                      <path d="M15 9L9 15" strokeLinecap="round"/>
                    </svg>
                  ),
                  description: 'Hambatan psikologis yang menghentikan progres dan pengembangan diri'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/80 rounded-xl p-6 text-center transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-red-600 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

           {/* Solutions Section */}
           <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-6">
              Solusi yang dilakukan Aksa
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Mentoring individu sesuai kebutuhan mentee",
                "Menyiapkan strategi yang bisa diterapkan untuk mentee sesuai konteksnya",
                "Menyediakan berbagai materi pembelajaran dan workbook di grup Telegram Aksa",
                "Memberikan support secara emosional di grup sebagai certified listener",
                "Sesi sharing tematik mingguan",
                "Mentoring grup sesuai request",
                "Latihan/challenge untuk individu",
                "Diskusi reguler",
                "Rekomendasi lowongan kerja/referral",
                "Internship bagi yang ingin mendapatkan benefit sebagai tim support Aksa (volunteer based)"
              ].map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-700">{solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <h2 className="text-xl md:text-2xl font-bold text-center text-blue-800 mb-8">
            Fokus yang Aksa Lakukan
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Wellbeing",
                description: "Mengutamakan kesehatan dan kesejahteraan secara menyeluruh agar memiliki semangat untuk mencapai tujuan.",
                icon: (
                  <svg className="w-24 h-24 text-blue-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 6.13 11.35 6 12 6zM2.71 3.16c-.39.39-.39 1.02 0 1.41l1.97 1.97C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.13 3.16c-.39-.39-1.03-.39-1.42 0zM12 16c-2.76 0-5-2.24-5-5 0-.65.13-1.26.36-1.83l6.47 6.47c-.57.23-1.18.36-1.83.36z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "Core Skills",
                description: "Membuka peluang untuk memaksimalkan skill dan kemampuan yang sudah ada & yang ingin diperdalam.",
                icon: (
                  <svg className="w-24 h-24 text-blue-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "Personal Branding",
                description: "Memudahkan untuk bisa menunjukkan kemampuan secara autentik, baik untuk tujuan personal maupun profesional.",
                icon: (
                  <svg className="w-24 h-24 text-blue-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((focus, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                  {focus.icon}
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2 text-center">{focus.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed text-center">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs 