import styles from './Home.module.scss'
import Landscape from '../../components/Landscape'
import LandscapeHome from '../../assets/images/landscape-home.png'
import Gallery from '../../components/Gallery'
import { homeData } from '../../assets/kasaFrenchDatas' 

function Home(){

    return( 
        <div className={styles.home}> 
            <Landscape 
                backImage={LandscapeHome} 
                overlayOpacity={0.6} 
                shadow={0.25} 
                alt={ homeData.altData }
            >
                <span>{ homeData.titleData.partOne }&nbsp;</span><span>{ homeData.titleData.partTwo }</span>
            </Landscape>
            <Gallery />  
        </div>
    )
}
export default Home