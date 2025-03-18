import styles from './Landscape.module.scss'

function Landscape ({backImage, overlayOpacity=0.9, children}) {
    
    const bgImage = {        
        background: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backImage})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
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