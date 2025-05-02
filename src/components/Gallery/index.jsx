import styles from "./Gallery.module.scss"
import { useContext, useState, useEffect, useMemo } from "react";
import { ProjectContext } from "../ProjectContext";
import {useNavigate } from "react-router-dom";


function Gallery() {

    const { locations, loading, error, repeatFetch } = useContext(ProjectContext);
    const navigate= useNavigate();
    

    const handleClick = (id) => {
        navigate(`/location/${id}`);
        window.scrollTo(0,0);
    };
    if (loading) {
        return(
            <section className={styles.galleryContainer}>
                    <div className={`${styles.erreurText} ${styles.erreur}`}>Chargement...</div>
            </section>
        )
    }
    if (error) {
        return(
            <section className={styles.galleryContainer}>   
                <div className={styles.erreur}>
                    <h1>404</h1>
                    <div className={styles.erreurText}><span>Oups! Un problème&nbsp;</span><span>empêche le chargement de la page</span></div>
                    <button onClick={repeatFetch}>Recharger la page</button>
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
                            onClick={ () => handleClick(id) }
                        >
                            {title}
                        </article>
                    );
                })} 
            </div>
        </section> 
    )
}

export default Gallery