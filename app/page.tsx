import About from '@/components/home/About'
import Contact from '@/components/home/Contact'
import Experience from '@/components/home/Experience'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About/>
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}