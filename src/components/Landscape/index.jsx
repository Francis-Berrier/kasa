import styles from './Landscape.module.scss'
import { useEffect, useState } from 'react';

function Landscape ({backImage, overlayOpacity=0.3, shadow=0, children}) {

    const [compShadow, setCompShadow]=useState(0);

    useEffect(() =>{
        const mediaQuery= window.matchMedia("(max-width: 768px)");

        const handleMediaChange = (event) =>{
            setCompShadow( event.matches ? `0` : `${shadow}` )
        };

        handleMediaChange(mediaQuery);

        mediaQuery.addEventListener("change", handleMediaChange);
        return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);

    const bgImage = {        
        background: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backImage})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        boxShadow: `0 4px 4px rgba(0, 0, 0, ${compShadow})`
    };
    return ( 
        <div
            className={styles.landscape}
            style={bgImage}>
            {children}
        </div>
    )
}
export default Landscape