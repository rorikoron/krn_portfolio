import style from "./ImageButton.module.scss"
import Image from 'next/image'

interface props{
    label: string,
    keyword: string,
    time: number | string,
    serial: number | string,
    onClickEvent: (newItem:string) => void,
}

const ImageButton: React.FC<props> = ({label, keyword, time, serial, onClickEvent}) =>{
    return(
        <article className={`${style.article}`} key={keyword} onClick={ () => onClickEvent(keyword)}>
        <figure className={`${style.figure}`}>
            <div>
                <Image src={"/images/" + keyword + ".png"} fill={true} alt={`${label}のBoothサムネイル画像`}/>
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