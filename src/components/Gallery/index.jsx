import styles from "./Gallery.module.scss"
import { useContext } from "react";
import { ProjectContext } from "../ProjectContext";
import {useNavigate } from "react-router-dom";
import { galleryData } from "../../assets/kasaFrenchDatas";


function Gallery() {
    const loadingText = galleryData.loadingText;
    const codeError = galleryData.codeError;
    const messagePartOne = galleryData.messagePartOne;
    const messagePartTwo = galleryData.messagePartTwo;
    const linkReload = galleryData.linkReload;

    const { locations, loading, error, repeatFetch } = useContext(ProjectContext);
    const navigate= useNavigate();
    

    const handleClick = (id) => {
        navigate(`/location/${id}`);
        window.scrollTo(0,0);
    };
    if (loading) {
        return(
            <section className={styles.galleryContainer}>
                    <div className={`${styles.erreurText} ${styles.erreur}`}>{loadingText}</div>
            </section>
        )
    }
    if (error) {
        return(
            <section className={styles.galleryContainer}>   
                <div className={styles.erreur}>
                    <h1>{codeError}</h1>
                    <div className={styles.erreurText}><span>{messagePartOne}&nbsp;</span><span>{messagePartTwo}</span></div>
                    <button onClick={repeatFetch}>{linkReload}</button>
                </div>
            </section>
        )
    }

    return (
        <section className={styles.galleryContainer}>      
            <div className={styles.gallery}>
                {locations.map(({ id, cover, title }) => {
                    const backgdImage= {
                        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.41)), url(${cover})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                    };
                    return (
                        <article
                            key= {id}
                            className={styles.galleryElement}
                            style={backgdImage}
                            role="button"
                            aria-label= {`Voir le logement: ${title}`}
                            onClick={ () => handleClick(id) }
                        >
                            <span className={styles.galleryTitle}>{title}</span>
                        </article>
                    );
                })} 
            </div>
        </section> 
    )
}

export default Gallery