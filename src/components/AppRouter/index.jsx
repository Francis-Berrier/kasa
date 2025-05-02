import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Location from '../../pages/Location'
import Erreur from '../../pages/Erreur'
import Header from "../Header"
import Footer from "../Footer"
import ProjectProvider from '../ProjectContext'


function AppRouter() {
    return (
        <Router>
            <ProjectProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/location/:id" element={<Location/>} />
                    <Route path="/erreur" element={<Erreur/>} />
                    <Route path="*" element={<Erreur/>} />
                </Routes>
                <Footer />
            </ProjectProvider> 
        </Router>
    )
}

export default AppRouter