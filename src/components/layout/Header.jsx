import Logo from '../ui/Logo'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 h-24">
        <div className="flex items-center justify-between h-full">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  )
}

export default Header 