import { ReactElement } from 'react';
import style from './Card.module.scss'
import Picture from './Picture';
import { PictureProps } from './Picture';

export interface CardProps extends PictureProps{
    Caption : ReactElement
}
const Card : React.FC<CardProps> = (avatarProps) =>{
    const { Caption } = avatarProps;
    return(
        <figure className={`${style.avatar}`}>
            <Picture {...avatarProps} className={style.avatar__icon} />
            <figcaption className={`${style.avatar__caption}`}>
                {Caption}
            </figcaption>
        </figure>
    )
}

export default Card;