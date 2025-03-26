import styles from './Home.module.scss'
import Landscape from '../../components/Landscape'
import LandscapeHome from '../../assets/images/landscape-home.png'
import Gallery from '../../components/Gallery'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Home(){
    const navigate= useNavigate();

    useEffect(()=>{
        function checkData(){
            const isStorage = localStorage.getItem("locations") !== null;
            if(!isStorage){
                navigate("/noload")
        }
        }
        checkData();
    }, []);

    return( 
        <div className={styles.home}> 
            <Landscape backImage={LandscapeHome} overlayOpacity={0.6} shadow={0.25}><span>Chez vous,&nbsp;</span><span>partout ailleurs</span></Landscape>
            <Gallery />  
        </div>
    )
}
export default Home