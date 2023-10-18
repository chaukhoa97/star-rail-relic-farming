import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <Button>Click me</Button>
      <Link href="/statistics"> Statistics </Link>
    </main>
  )
}
