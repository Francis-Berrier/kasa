import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Home from './pages/Home'
import About from './pages/About'
import '../src/assets/styles/globals.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
)
