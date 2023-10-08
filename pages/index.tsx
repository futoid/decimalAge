import Image from 'next/image'
import { Inter } from 'next/font/google'
import Test from './test'
import Age from './age'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' h-screen w-screen flex items-center justify-center'>
      <Age/>
    </main>
  )
}
