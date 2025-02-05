/**
 * Utility untuk mengecek apakah kode dijalankan di client-side atau server-side
 * 
 * @returns {boolean} true jika di client-side, false jika di server-side
 * 
 * Cara penggunaan:
 * 
 * 1. Import utility:
 * import { isClient } from '@/utils/isClient'
 * 
 * 2. Gunakan dalam komponen:
 * 
 * // Untuk nilai default
 * const [width, setWidth] = useState(isClient ? window.innerWidth : 0)
 * 
 * // Untuk logic conditional
 * useEffect(() => {
 *   if (!isClient) return
 *   
 *   const handleResize = () => {
 *     setWidth(window.innerWidth)
 *   }
 *   
 *   window.addEventListener('resize', handleResize)
 *   return () => window.removeEventListener('resize', handleResize)
 * }, [])
 * 
 * // Untuk render conditional
 * if (!isClient) {
 *   return <LoadingComponent />
 * }
 */

export const isClient = typeof window !== 'undefined' 