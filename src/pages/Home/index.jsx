import styles from './Home.module.scss'
import Landscape from '../../components/Landscape'
import LandscapeHome from '../../assets/images/landscape-home.png'
import { useEffect } from 'react'
import Gallery from '../../components/GalleryElement'

function Home(){
    useEffect(() => {
        const storedLocations = localStorage.getItem("locations")

        if(!storedLocations) {
            fetch('/public/logements.json')
            .then(reponse => reponse.json())
            .then(data => {
                localStorage.setItem('locations', JSON.stringify(data))
            })
        }
    }, []);
    
    return( 
        <div className={styles.home}> 
            <Landscape backImage={LandscapeHome} overlayOpacity={0.3}>Chez vous, partout ailleurs</Landscape>
            <Gallery />  
        </div>
    )
}

export default Home