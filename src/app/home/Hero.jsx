const Hero = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Video Content */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg md:order-last">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/ks_l0_UF83g"
              title="Aksa Academy Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              TENTANG AKSA ACADEMY
            </h1>
            <div className="space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                Aksa Academy Indonesia memiliki misi untuk mendukung insan pembelajar (yang kami sebut "Teman Aksa") untuk memperoleh pengetahuan, pemahaman lebih mendalam, serta dapat mengimplementasikan skill yang dibutuhkan untuk pengembangan diri dan berkarya sesuai dengan passion secara remote.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                Apakah itu menjadi VA, freelancer, remote assistant, digital nomad, penjajar daring, maupun karir remote lainnya, kamu adalah bagian dari komunitas kami yang akan terus bertumbuh bersama dan saling mendukung satu sama lain.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700">
                Kami menyediakan workshop dan sesi sharing, support group, dan konsultasi/mentoring sesuai dengan kebutuhan dan preferensi kamu, yang juga dapat disesuaikan dengan pengalaman personal dan profesional kamu saat ini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 