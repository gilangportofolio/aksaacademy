import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/logo.png"
        alt="Aksa Academy Logo"
        width={179}
        height={81}
        priority
      />
    </Link>
  )
}

export default Logo 