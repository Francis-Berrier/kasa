import styles from './CarouselAppart.module.scss'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function CarouselAppart({locPictures}) {
    

    const [pictureBg, setPicture]= useState(0);
    const picLength = locPictures.length;
    
    const bgImage = {
        backgroundImage: `url(${locPictures[pictureBg]})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }
    function goBack() {
        if (pictureBg === 0 || pictureBg >= picLength) {
            setPicture(picLength-1)
        }else{
            setPicture(pictureBg - 1)
        }
    }
    function goForward() {
        if (pictureBg === picLength-1 || pictureBg >= picLength) {
            setPicture(0)
        }else{
            setPicture(pictureBg + 1)
        }
    }
    return (
        <section className={styles.carousel} style={bgImage}>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.chevrons} onClick={goBack} />
            <FontAwesomeIcon icon={faChevronRight} className={styles.chevrons} onClick={goForward} />
                    
            <div className={styles.pageNum}>
                {pictureBg + 1}/{picLength}
            </div>
        </section>
    )
}
 export default CarouselAppart
    
