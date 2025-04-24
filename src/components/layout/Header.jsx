import Logo from '../ui/Logo'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="container mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-full">
          <Logo />
          <Navigation />
        </div>
      </div>
      {/* Subtle gradient line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </header>
  )
}

export default Header 