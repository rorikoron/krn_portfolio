import Image from 'next/image'
import style from './Card.module.scss'

interface CardProps {
    src: string;
    alt: string;
}

const Card : React.FC<CardProps> = ({src, alt}) =>{
    return(
        <figure className={`${style.avatar}`}>
            <div className={`${style.avatar__icon}`}>
                <Image src={src} fill={true} alt={alt} />
            </div>
            <figcaption className={`${style.avatar__caption}`}>
                <span className={`${style.caption__name}`}>Rorikoron</span>
                <span className={`${style.caption__status}`}>🔴Online</span>
            </figcaption>
        </figure>
    )
}

export default Card;