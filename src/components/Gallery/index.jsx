import styles from "./Gallery.module.scss"
import { useContext } from "react";
import { ProjectContext } from "../ProjectContext";
import {useNavigate } from "react-router-dom";


function Gallery() {

    const { locations } = useContext(ProjectContext);
    const isLocations = locations !== null;
    const navigate= useNavigate();

    function reLoad() {
        navigate("/")
        window.location.reload();
        window.scrollTo(0,0);
    }  

    return(
        <div className={styles.galleryContainer}>
            { locations.length > 0 ?
                <div className={styles.gallery}>
                    {locations.map(({ id, cover, title }) => {
                    const backgdImage= {
                        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.41)), url(${cover})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                    }
                    const handleClick = () => {
                        navigate(`/location/${id}`);
                        window.scrollTo(0,0);
                    }
                    return (
                        <div key={id} className={styles.galleryElement} style={backgdImage} onClick={handleClick}>
                            {title}
                        </div>
                    );
                    })} 
                </div> :
                <div className={styles.erreur}>
                    <h1>404</h1>
                    <div className={styles.erreurText}><span>Oups! Un problème&nbsp;</span><span>empêche le chargement de la page</span></div>
                    <a onClick={reLoad}>Recharger la page</a>
                </div>
            }  
        </div> 
    )
}

export default Gallery