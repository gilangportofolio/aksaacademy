const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Kolom Kiri */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              PT AKSA FAHIMA AVASTHANA
            </h2>
            <p className="text-sm leading-relaxed">
              NO. AHU-000335.AH.01.30.TAHUN 2025
            </p>
            <div className="text-blue-100 space-y-3">
              <p className="leading-relaxed text-lg">
                Dukung Kamu Jadi Versi Terbaikmu Dengan
              </p>
              <p className="text-blue-100 font-semibold">
                Self-Development & Personal Branding Skills
              </p>
              <p className="text-sm leading-relaxed">
                TANGERANG SELATAN, BANTEN 15414
              </p>
            </div>
          </div>
          
          {/* Kolom Kanan */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition duration-200">
                Instagram
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition duration-200">
                Facebook
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition duration-200">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/10 text-center">
          <p className="text-sm text-blue-100 pb-8">
            Created with ❤️ by @gilangportofolio
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 