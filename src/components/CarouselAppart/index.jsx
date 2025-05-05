import styles from './CarouselAppart.module.scss'
import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function CarouselAppart({locPictures}) {

    const carouselRef = useRef(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.offsetWidth);
        }
    });

    useEffect(() => {
        if(!locPictures || locPictures.length === 0) return;

        locPictures.forEach((pic) => {
            const img = new Image();
            img.src = pic;
        });
    }, [locPictures]);

    const [isAnimating,setIsAnimating] = useState(false);
    const [prevIndex, setPrevIndex] = useState(0);
    const [currentIndex, setCurrentIndex]= useState(0);
    const [direction, setDirection]= useState('right');
    const picLength = locPictures.length;

    const goBack = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setPrevIndex(currentIndex);
        setCurrentIndex((index) => ( index === 0 ? picLength - 1 : index - 1 ));
        setDirection('left');  
    };
    const goForward = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setPrevIndex(currentIndex);
        setCurrentIndex((index) => ( index === picLength - 1 ? 0 : index + 1));
        setDirection('right');    
    };
    return (
        <section ref={carouselRef} className={styles.carousel}>

            <div className={styles.imageContainer}>
                
                    <motion.img
                        key={`curr-${currentIndex}`}
                        src={locPictures[currentIndex]} 
                        alt={`Image ${currentIndex +1}`}
                        initial={{ x: direction === 'left' ? -width : width}}
                        animate={{ x: 0 }}
                        onAnimationComplete={() => {setIsAnimating(false)}}
                        transition={{ duration : 0.5 }}
                    />
                    { isAnimating &&
                    <motion.img
                        key={`prev-${prevIndex}`}
                        src={locPictures[prevIndex]} 
                        alt={`Image ${prevIndex +1}`}
                        initial={{ x: 0 }}
                        animate={{ x: direction === 'left' ? width : -width}}
                        transition={{ duration : 0.5 }}
                    />
                    }              
            </div>
            {picLength > 1 && (
            <div className={styles.navContainer}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.chevrons} onClick={goBack} />
                <FontAwesomeIcon icon={faChevronRight} className={styles.chevrons} onClick={goForward} />
                        
                <div className={styles.pageNum}>
                    {currentIndex + 1}/{picLength}
                </div>
            </div> 
            )};
        </section>
    )
}
 export default CarouselAppart
    
