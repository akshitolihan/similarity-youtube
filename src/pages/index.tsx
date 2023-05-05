import Image from 'next/image'
import { Inter } from 'next/font/google'
import Paragraph from '../components/ui/Paragraph';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main>
      <h1 className="">Hi this is Akshit Kumar - Akshit Olihan</h1>
    <Paragraph size='sm'/>
      <p></p>
    </main>
    </>
  )
}
