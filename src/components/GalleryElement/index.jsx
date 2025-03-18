import styles from "./GalleryElement.module.scss"

function Gallery() {

    const locations = JSON.parse(localStorage.getItem("locations"));
    return(
        <div className={styles.gallery}>
            {locations.map(({ id, cover, title }) => {
                const backgdImage= {
                    backgroundImage: `url(${cover})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }
                return (
                    <div key={id} className={styles.galleryElement} style={backgdImage} >
                        {title}
                    </div>
                );

            })}   
        </div>   
    )

}

export default Gallery