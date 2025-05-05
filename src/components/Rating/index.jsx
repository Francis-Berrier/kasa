import styles from './Rating.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { config } from '../../assets/config';


function Rating({ rating }) {
    const maxRating = config.MAX_RATING;
    const validRating = Math.max(0, Math.min(rating, maxRating));

    return(
        <div className={styles.rating}>
            {[...Array(maxRating)].map((_, index) => {
                const starIndex= index+1;

                return(
                    <FontAwesomeIcon icon={faStar} key={index} className={
                        starIndex <= validRating ? styles.starFull : styles.starEmpty
                    }/>
                )
            })}
        </div>
    )
}
export default Rating