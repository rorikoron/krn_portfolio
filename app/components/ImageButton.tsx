import style from "./ImageButton.module.scss"
import Image from 'next/image'

export interface ItemKeys{
    serial?: string,
    fileName: string,
}
export interface ItemValues{
    label: string,
    fileName: string,
    time: number | string,
    serial?: string,
    onClickEvent: (object : ItemKeys) => void,
}

const ImageButton: React.FC<ItemValues> = ({label, fileName, time, serial, onClickEvent}) =>{
    return(
        <article className={`${style.article}`} key={fileName} onClick={ () => onClickEvent({ serial, fileName })}>
        <figure className={`${style.figure}`}>
            <div>
                <Image src={"/images/" + fileName + ".png"} fill={true} alt={`${label}のBoothサムネイル画像`}/>
            </div>
            <figcaption className={`${style.figcaption}`}>
                <cite>{label}</cite>
                <small><time>{time}</time></small>
                
            </figcaption>
        </figure>

    </article>
    )
    
}

export default ImageButton;