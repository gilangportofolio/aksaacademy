import Program from './Program'

export const metadata = {
  title: 'Program Remote Work Mentoring - Aksa Academy',
  description: 'Tingkatkan karir remote work Anda bersama mentor berpengalaman. Program mentoring intensif dengan materi praktek langsung, konsultasi personal, dan akses ke komunitas eksklusif. Mulai dari Rp 200.000 dengan garansi kepuasan.',
  keywords: [
    'remote work mentoring',
    'mentoring karir',
    'work from home',
    'digital skills',
    'aksa academy',
    'konsultasi karir',
    'pelatihan remote work',
    'komunitas remote worker'
  ],
  openGraph: {
    title: 'Program Remote Work Mentoring - Aksa Academy',
    description: 'Program mentoring intensif untuk sukses berkarir sebagai remote worker. Dibimbing langsung oleh mentor berpengalaman dengan materi praktek yang aplikatif.',
    images: [
      {
        url: '/og-program.jpg', // Pastikan untuk menambahkan gambar OG yang sesuai
        width: 1200,
        height: 630,
        alt: 'Remote Work Mentoring Aksa Academy'
      }
    ],
    type: 'website'
  }
}

export default function ProgramPage() {
  return (
    <>
      <Program />
    </>
  )
} 