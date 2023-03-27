import Button from '@/components/button/Button'
import Sidebar from '@/components/layouts/Sidebar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Sidebar />
      <section id="content-page" className="px-24px pt-12px">
        <Button variant="secondary" size="lg" >OKAY</Button>
      </section>
    </main>
  )
}
