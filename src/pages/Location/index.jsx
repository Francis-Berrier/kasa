import styles from'./Location.module.scss'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../../components/ProjectContext'
import CarouselAppart from '../../components/CarouselAppart';
import Card from '../../components/Card';
import Tag from '../../components/Tag';
import TitleLocation from '../../components/TitleLocation';
import Host from '../../components/Host';
import Rating from '../../components/Rating';


function Location(){
    const { locations } = useContext(ProjectContext);
    const { id } = useParams();
    const [location, setLocation] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        if(locations.length > 0){
            const foundLocation= locations.find((item) => item.id === id);
            if(!foundLocation) {
                navigate("/erreur")

            }
            setLocation(foundLocation);
        }
    },[locations, id]);

    
    if (!location) {
        return <div>Location not found</div>; // Un message ou une gestion d'erreur si l'id n'est pas trouvé
    }
    
    return(
        <section className={styles.location}>
            <CarouselAppart locPictures={location.pictures} />
            <div className={styles.locInfo}>
                <div>
                    <TitleLocation title={location.title} subtitle={location.location} />
                    <div className={styles.tagContainer}>
                        {location.tags.map(( tag, index ) => {
                            return(
                                <Tag key={`${tag}-${index}-${id}`}>{tag}</Tag>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.locInfoRight}> 
                    <Host name={location.host.name} picture={location.host.picture}/>
                    <Rating rating={location.rating} />
                </div>
            </div>
            
            <div className={styles.cardContainer}>
                <div className={styles.card}><Card cardTitle="Description">{location.description}</Card></div>
                <div className={styles.card}><Card cardTitle="Equipements">
                    <ul>
                    {location.equipments.map(( equipment, index  ) =>{
                        return(
                            <li key={`${equipment}-${index}-${id}`}>{equipment}</li>
                        )}
                    )}
                    </ul> 
                </Card></div>
            </div>
        </section>
        
    )
    
}

export default Location