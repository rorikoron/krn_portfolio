import style from './Card.module.scss'
import Picture from './Picture';
import { PictureProps } from './Picture';

const Card : React.FC<PictureProps> = (avatarProps) =>{
    return(
        <figure className={`${style.avatar}`}>
            <Picture {...avatarProps} className={style.avatar__icon} />
            <figcaption className={`${style.avatar__caption}`}>
                <span className={`${style.caption__name}`}>Rorikoron</span>
                <span className={`${style.caption__status}`}>🔴Online</span>
            </figcaption>
        </figure>
    )
}

export default Card;