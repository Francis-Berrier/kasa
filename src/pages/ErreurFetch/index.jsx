import styles from './ErreurFetch.module.scss'
import { useNavigate } from 'react-router-dom'
import Landscape from '../../components/Landscape'
import LandscapeHome from '../../assets/images/landscape-home.png'

function ErreurFetch() {
    const navigate= useNavigate();

    function handleClick() {
        navigate("/")
        window.location.reload();
        window.scrollTo(0,0);  
    }
    return (
        <div className={styles.erreurPage}> 
            <Landscape backImage={LandscapeHome} overlayOpacity={0.6} shadow={0.25}><span>Chez vous,&nbsp;</span><span>partout ailleurs</span></Landscape>
            <div className={styles.erreur}>
                <h1>404</h1>
                <div className={styles.erreurText}><span>Oups! Un problème&nbsp;</span><span>empêche le chargement de la page</span></div>
                <a onClick={handleClick}>Recharger la page</a>
            </div>
        </div>
    )
}

export default ErreurFetch