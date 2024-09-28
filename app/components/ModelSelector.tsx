import style from "./ModelSelector.module.scss"
import Image from 'next/image'
import ImageButton from "./ImageButton"

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

const ModelSelector: React.FC<ItemValues> = ({label, fileName, time, serial, onClickEvent}) => {
    const clickEvent = () => onClickEvent({serial, fileName});
    const Thumbnail : React.FC = () => (<Image src={"/images/" + fileName + ".png"} fill={true} alt={`${label}のBoothサムネイル画像`}/>)
    const Caption : React.FC = () => {
        return(
            <>
                <cite className={`${style.cite}`}>{label}</cite>
                <small><time>{time}</time></small>
            </>
        )
    }

    return(
        <ImageButton key={fileName} Caption={Caption} Thumbnail={Thumbnail} onClickEvent={clickEvent} />
    )
}
export default ModelSelector;