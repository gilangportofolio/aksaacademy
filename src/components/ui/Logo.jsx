import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex items-center h-full">
      <Image 
        src="/images/logo.png"
        alt="Logo"
        width={150}
        height={81}
        priority
        style={{
          width: '150px',
          height: 'auto'
        }}
      />
    </div>
  )
}

export default Logo 