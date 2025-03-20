import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProjectProvider } from './components/ProjectContext'
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Home from './pages/Home'
import About from './pages/About'
import Location from './pages/Location'
import Erreur from './pages/Erreur'
import '../src/assets/styles/globals.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/location/:id" element={<Location/>} />
          <Route path="/erreur" element={<Erreur/>} />
          <Route path="*" element={<Erreur/>} />
        </Routes>
        <Footer />
      </Router>
    </ProjectProvider>
    
  </StrictMode>,
)
