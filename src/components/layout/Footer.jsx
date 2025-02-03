const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kolom Kiri */}
          <div>
            <h2 className="text-2xl font-bold mb-4">AKSA ACADEMY</h2>
            <p className="text-sm">
              "Ikung belajar & bertumbuh" - Konsultan ptsd & privat
              ® Mentoring & dalam pengembangan diri ®
            </p>
          </div>
          
          {/* Kolom Kanan */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-xl font-bold mb-4">LETS CONNECT</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <div className="w-8 h-8 bg-white rounded-full" />
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="w-8 h-8 bg-white rounded-full" />
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="w-8 h-8 bg-white rounded-full" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-blue-600">
          <p className="text-sm">Created @gitlangportofolio</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 