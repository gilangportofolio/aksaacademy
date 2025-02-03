import Hero from './Hero'
import Partnership from './Partnership'

export const metadata = {
  title: 'Home - Aksa Academy',
  description: 'Aksa Academy - Platform Pembelajaran Online untuk Remote Work dan Digital Skills',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partnership />
    </>
  )
}
