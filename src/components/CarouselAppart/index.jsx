import styles from './CarouselAppart.module.scss'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CarouselAppart({locPictures}) {
    const [pictureBg, setPicture]= useState(0);
    const picLength = locPictures.length;
   
    function goBack() {
        
        if (pictureBg === 0 || pictureBg >= picLength) {
            setPicture(picLength-1)
        }else{
            setPicture(pictureBg - 1)
        };
    }
    function goForward() {
        if (pictureBg === picLength-1 || pictureBg >= picLength) {
            setPicture(0)
        }else{
            setPicture(pictureBg + 1)
        };
    }
    return (
        <section className={styles.carousel}>
            <div className={styles.imageContainer}>
                <img src={locPictures[pictureBg]}/>
            </div>
            {picLength > 1 ? 
            <div className={styles.navContainer}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.chevrons} onClick={goBack} />
                <FontAwesomeIcon icon={faChevronRight} className={styles.chevrons} onClick={goForward} />
                        
                <div className={styles.pageNum}>
                    {pictureBg + 1}/{picLength}
                </div>
            </div> : null
            }
            
           
        </section>
    )
}
 export default CarouselAppart
    
