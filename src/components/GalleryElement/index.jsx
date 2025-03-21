import styles from "./GalleryElement.module.scss"
import { useContext } from "react";
import { ProjectContext } from "../ProjectContext";
import {useNavigate } from "react-router-dom";


function Gallery() {

    const { locations } = useContext(ProjectContext);
    const navigate= useNavigate();

    return(
        <div className={styles.gallery}>
            {locations.map(({ id, cover, title }) => {
                const backgdImage= {
                    backgroundImage: `url(${cover})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
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
        </div>   
    )

}

export default Gallery