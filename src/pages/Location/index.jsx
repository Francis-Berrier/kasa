import styles from'./Location.module.scss'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ProjectContext } from '../../components/ProjectContext'
import CarouselAppart from '../../components/CarouselAppart'
import Card from '../../components/Card'
import Tag from '../../components/Tag'
import TitleLocation from '../../components/TitleLocation'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import { locationData } from '../../assets/kasaFrenchDatas'

function Location(){
    const { locations } = useContext(ProjectContext);
    const { id } = useParams();
    const [location, setLocation] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        if(!locations || locations.length === 0) {
            navigate("/erreur");
            return;
        };

        const foundLocation= locations.find((item) => item.id === id);
        if(!foundLocation) {
            navigate("/erreur");
            return;
        }
        setLocation(foundLocation);
        
    },[locations, id]);
    
    if (!location) return null;
    
    return(
        <section className={styles.location}>
            <CarouselAppart locPictures={location.pictures} />
            <div className={styles.locInfo}>
                <div>
                    <TitleLocation title={location.title} subtitle={location.location} />
                    <div className={styles.tagContainer}>
                        {location.tags.map(( tag ) => {
                            return(
                                <Tag key={`${tag}-${id}`}>{tag}</Tag>
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
                <Card className={styles.card} cardTitle={locationData.description}>{location.description}</Card>
                <Card className={styles.card} cardTitle={locationData.equipments}>
                    <ul>
                    {location.equipments.map(( equipment, index  ) =>{
                        return(
                            <li key={`${equipment}-${index}-${id}`}>{equipment}</li>
                        )}
                    )}
                    </ul> 
                </Card>
            </div>
        </section>       
    )    
}
export default Location