import { redirect } from 'next/navigation'

export default function Home() {
  // Server-side redirect to the canonical site
  redirect('https://rorikoron.net/')
}
