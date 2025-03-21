import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Location from '../../pages/Location'
import Erreur from '../../pages/Erreur'
import Header from "../../components/Header"
import Footer from "../../components/Footer"


function AppRouter() {
    return (
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
    )
}

export default AppRouter