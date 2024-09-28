import style from './ImageButton.module.scss'
interface ImageButtonProps{
    onClickEvent: () => void
    Thumbnail: React.FC,
    Caption: React.FC,
}

const ImageButton : React.FC<ImageButtonProps> = ({onClickEvent, Thumbnail, Caption}) =>{
    
    return(
        
        <article className={`${style.article}`} onClick={() => onClickEvent()}>
            <figure className={`${style.figure}`}>
                <div>
                    <Thumbnail />
                </div>
                <figcaption className={`${style.figcaption}`}>
                    <Caption />
                </figcaption>
            </figure>

        </article>
    )
}

export default ImageButton;