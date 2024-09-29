"use client"
import { ReactElement } from 'react';
import style from './ImageButton.module.scss'
interface ImageButtonProps{
    Thumbnail: ReactElement,
    Caption: ReactElement,
}

const ImageButton : React.FC<ImageButtonProps> = ({ Thumbnail, Caption }) =>{
    
    return(
        
        <article className={`${style.article}`}>
            <figure className={`${style.figure}`}>
                <div>
                    {Thumbnail}
                </div>
                <figcaption className={`${style.figcaption}`}>
                    {Caption}
                </figcaption>
            </figure>

        </article>
    )
}

export default ImageButton;