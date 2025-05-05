import styles from './Landscape.module.scss'
import { useEffect, useState } from 'react';
import { config } from '../../assets/config';

function Landscape ({backImage, overlayOpacity=0.3, shadow=0, children, alt=""}) {

    const [compShadow, setCompShadow]=useState(0);

    useEffect(() =>{
        const img = new Image();
        img.src = backImage;

        const breakPoint = config.MOBILE_BREAKPOINT;
        const mediaQuery= window.matchMedia(`(max-width: ${breakPoint}px)`);

        const handleMediaChange = (event) =>{
            setCompShadow( event.matches ? 0 : shadow )
        };

        handleMediaChange(mediaQuery);

        mediaQuery.addEventListener("change", handleMediaChange);
        return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, [backImage, shadow]);

    const bgImage = {        
        background: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backImage})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        boxShadow: `0 4px 4px rgba(0, 0, 0, ${compShadow})`
    };
    return ( 
        <div
            className={styles.landscape}
            style={bgImage}
            {...(alt ? { role: 'img', 'aria-label': alt } : {})}
        >
            {children}
        </div>
    )
}
export default Landscape