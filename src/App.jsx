import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogIndex from './blog/BlogIndex'
import BlogPost from './blog/BlogPost'

function Home() {
  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
